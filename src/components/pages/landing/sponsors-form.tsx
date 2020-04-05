import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { TextField } from '../../elements/form-control';
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
  align-items: center
  background: url('https://res.cloudinary.com/doaxab4ly/image/upload/v1586095383/go-online-fund_tgapcj.jpg');
  background-size: contain;
  background-repeat: no-repeat;
`;

const SponsorsFormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  background: url('https://res.cloudinary.com/doaxab4ly/image/upload/v1586095383/go-online-fund_tgapcj.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 500px;
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
      <SponsorSection>
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
          onClick={submitForm}
        >
          SUBMIT
        </PrimaryButton>
      </SponsorsFormWrapper>
      </SponsorSection>
    </>
  );
}

export default SponsorsForm;
