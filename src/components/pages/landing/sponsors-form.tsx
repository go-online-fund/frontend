import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { TextField } from '../../elements/form-control';
import { PrimaryButton } from '../../elements/buttons';
import { StylesSchema } from '../../../shared/enums/styles';
import FormsService from '../../../shared/services/forms.service';
import { SponsorApplication } from '../../../shared/interfaces/forms.interface';

interface SponsorHelpOption {
  value: string;
  label: string;
}

const SponsorTitle = styled.div`
  background-color: ${StylesSchema.Yellow};
  color: ${StylesSchema.Black};
  font-size: 2rem;
  font-weight: 1000;
  padding: 2rem 0;
  text-align: center;
  width: 100%;
`;

const SponsorsFormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const ReactSelect = React.lazy(() => import('react-select'));

const Select = styled(ReactSelect)`
  margin: 0.5rem;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const options: SponsorHelpOption[] = [
  { value: 'finance', label: 'Finance' },
  { value: 'resources, logistics, or operations', label: 'Resources, Logistics, or Operations' },
  { value: 'talent', label: 'Talent' },
  { value: 'training', label: 'Training' },
];

const SponsorsForm: React.FC = () => {
  // const [selectedOption, setSelectedOption] = useState('');
  const [sponsorForm, setSponsorForm] = useState<SponsorApplication>({
    companyName: '', 
    companyEmail: '', 
    contributionArea: '',
  });

  const onSelect = (e: SponsorHelpOption[]) => {
    const contributionArea = e.map(({ value }) => value).join(',');
    setSponsorForm({
      ...sponsorForm,
      contributionArea
    })
  };

  const submitForm = () => {
    FormsService.postSponsorApplication(sponsorForm);
  };

  return (
    <>
      <SponsorTitle id='beASponsor'>
        BE A SPONSOR
      </SponsorTitle>
      <SponsorsFormWrapper>
        <TextField 
          placeholder='Company name'
          onChange={(e) => setSponsorForm({
            ...sponsorForm,
            companyName: e.target.value,
          })}
        />
        <TextField 
          placeholder='Contact' 
          onChange={(e) => setSponsorForm({
            ...sponsorForm,
            companyEmail: e.target.value,
          })}
        />
        <span>What would you like to contribute?</span>
        <Suspense fallback={<div>Loading Options...</div>}>
          <Select
            options={options}
            isMulti
            onChange={onSelect}
          />
        </Suspense>
        <PrimaryButton
          type='button'
          onClick={submitForm}
        >
          Be a Sponsor
        </PrimaryButton>
        <h3>We will be in touch with you shortly</h3>
      </SponsorsFormWrapper>
    </>
  );
}

export default SponsorsForm;
