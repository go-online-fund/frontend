import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { TextField, SuccessText } from '../../elements/form-control';
import { PrimaryButton } from '../../elements/buttons';
import FormsService from '../../../shared/services/forms.service';
import { SponsorApplication } from '../../../shared/interfaces/forms.interface';

interface SponsorHelpOption {
  value: string;
  label: string;
}

// const SponsorTitle = styled.div`
//   background-color: ${StylesSchema.Yellow};
//   color: ${StylesSchema.Black};
//   font-size: 2rem;
//   font-weight: 1000;
//   padding: 2rem 0;
//   text-align: center;
//   width: 100%;
// `;

const SponsorSection = styled.div`
  margin: 0 auto;
  text-align: center;
  align-items: center;
  height: 100%;
  background: #fbc91b
  }
`;

const SponsorsFormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  background: url('https://res.cloudinary.com/doaxab4ly/image/upload/v1586095383/go-online-fund_tgapcj.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 750px;
  
  @media (max-width: 415px){
    background: url('https://res.cloudinary.com/doaxab4ly/image/upload/v1586131835/mobile_ljxlfe.jpg') !important
    background-size: contain;
    padding-top: 240px;
  background-repeat: no-repeat;
  }
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

const defaultForm = {
  companyName: '',
  companyEmail: '',
  contributionArea: '',
};

const SponsorsForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sponsorForm, setSponsorForm] = useState<SponsorApplication>(defaultForm);

  const onSelect = (e: SponsorHelpOption[]) => {
    const contributionArea = e.map(({ value }) => value).join(',');
    setSponsorForm({
      ...sponsorForm,
      contributionArea
    })
  };

  const submitForm = async () => {
    const responseStatus = await FormsService.postSponsorApplication(sponsorForm);
    if (responseStatus === 200) {
      setSponsorForm(defaultForm);
      setIsSubmitted(true);
    }
  };

  return (
      <SponsorSection id='beASponsor'>
      <SponsorsFormWrapper>
        <TextField style={{background: 'white', paddingTop: '15px', paddingBottom: '15px'}}
            required
          placeholder='Company name'
          onChange={(e) => setSponsorForm({
            ...sponsorForm,
            companyName: e.target.value,
          })}
        />
        <TextField style={{background: 'white', paddingTop: '15px', paddingBottom: '15px'}}
            required
            type="email"
          placeholder='Company Email'
          onChange={(e) => setSponsorForm({
            ...sponsorForm,
            companyEmail: e.target.value,
          })}
        />
        <Suspense fallback={<div>Loading Options...</div>}>
          <Select placeholder={<div>What would you like to contribute?</div>}
                  required
                  style={{paddingTop: '40px', paddingBottom: '40px', height: '60px'}}
            options={options}
            isMulti
            onChange={onSelect}
          />
        </Suspense>
        <PrimaryButton
          type='submit'
          // onClick={submitForm}
        >
          BE A SPONSOR
        </PrimaryButton>
        {
          isSubmitted && (
            <SuccessText>
              Thank you for. Your response has been submitted. We will be in touch with you shortly to discuss how you can support this initiative.
            </SuccessText>
          )
        }
      </SponsorsFormWrapper>
      </SponsorSection>
  );
}

export default SponsorsForm;
