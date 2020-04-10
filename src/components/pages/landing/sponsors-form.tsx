import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { SponsorApplication } from '../../../shared/interfaces/forms.interface';
import FormsService from '../../../shared/services/forms.service';
import Loading from '../../common/loading';
import { PrimaryButton } from '../../elements/buttons';
import { Select, SuccessText, TextField } from '../../elements/form-control';
import { StylesSchema } from '../../../shared/enums/styles';

interface SponsorHelpOption {
  value: string;
  label: string;
}

const SponsorSection = styled.div`
  background-color: ${StylesSchema.Yellow};
  margin: 0 auto;
  padding-top: 60px;
  text-align: center;
`;

const LoadingDiv = styled.div`
  height: 400px;
  padding-top: 400px;
`;

const SponsorsFormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${StylesSchema.Yellow};
`;

const BigTextHeader = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const SmallTextHeader = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0px 0px 40px;
  text-transform: uppercase;

  @media (min-width: 415px) {
    font-size: 71px;
  }
`;

const NormalTextHeader = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0px 0px 15px;

  text-transform: uppercase;
`;


const options: SponsorHelpOption[] = [
  { value: 'Capital', label: 'Capital' },
  { value: 'Resources, Logistics, or Operations', label: 'Resources, Logistics, or Operations' },
  { value: 'Training', label: 'Training' },
];

const defaultForm = {
  companyName: '',
  companyEmail: '',
  contactNumber: '',
  contributionArea: '',
};

const SponsorsForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectValues, setSelectValues] = useState<SponsorHelpOption[]>([]);
  const [sponsorForm, setSponsorForm] = useState<SponsorApplication>(defaultForm);

  const onSelect = (e: SponsorHelpOption[]) => {
    setSelectValues(e);
    if (!e) {
      setSponsorForm({
        ...sponsorForm,
        contributionArea: '',
      });
      return;
    }
    const contributionArea = e.map(({ value }) => value).join(',');
    setSponsorForm({
      ...sponsorForm,
      contributionArea,
    });
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const responseStatus = await FormsService.postSponsorApplication(sponsorForm);
    if (responseStatus === 200) {
      setIsLoading(false);
      setSponsorForm(defaultForm);
      setSelectValues([]);
      setIsSubmitted(true);
    }
  };

  return (
    <SponsorSection id='beASponsor'>
      <BigTextHeader>Big Business</BigTextHeader>
      <NormalTextHeader>Helps</NormalTextHeader>
      <SmallTextHeader>Small Business</SmallTextHeader>
      {
        !isLoading && !isSubmitted && (
          <SponsorsFormWrapper onSubmit={submitForm}>
            <TextField
              aria-label='Company name'
              required
              placeholder='Company name'
              value={sponsorForm.companyName}
              onChange={(e) => setSponsorForm({
                ...sponsorForm,
                companyName: e.target.value,
              })}
            />
            <TextField
              aria-label='Company Email'
              required
              type='email'
              placeholder='Company Email'
              value={sponsorForm.companyEmail}
              onChange={(e) => setSponsorForm({
                ...sponsorForm,
                companyEmail: e.target.value,
              })}
            />
            <TextField
              aria-label='Contact Number'
              type='tel'
              placeholder='Contact number'
              value={sponsorForm.contactNumber}
              onChange={(e) => setSponsorForm({
                ...sponsorForm,
                contactNumber: e.target.value,
              })}
            />
            <Suspense fallback={<div>Loading Options...</div>}>
              <Select
                aria-label='Contribution'
                placeholder='What would you like to contribute?'
                required
                options={options}
                isMulti
                onChange={onSelect}
                value={selectValues}
              />
            </Suspense>
            <PrimaryButton
              type='submit'
            >
              BE A SPONSOR
            </PrimaryButton>
          </SponsorsFormWrapper>
        )
      }
      {
        isLoading && !isSubmitted && (
          <LoadingDiv>
            <Loading />
          </LoadingDiv>
        )
      }
      {
        isSubmitted && !isLoading && (
          <LoadingDiv>
            <SuccessText type='dark'>
              Thank you for. Your response has been submitted.
              <br />
              We will be in touch with you shortly to discuss
              how you can support this initiative.
            </SuccessText>
          </LoadingDiv>
        )
      }
    </SponsorSection>
  );
};

export default SponsorsForm;
