import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { TextField } from '../../elements/form-control';
import { PrimaryButton } from '../../elements/buttons';
import { StylesSchema } from '../../../shared/enums/styles';

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
`;

const options: SponsorHelpOption[] = [
  { value: 'finance', label: 'Finance' },
  { value: 'resources, logistics, or operations', label: 'Resources, Logistics, or Operations' },
  { value: 'talent', label: 'Talent' },
  { value: 'training', label: 'Training' },
];

const SponsorsForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const onSelect = (e: SponsorHelpOption[]) => {
    // setSelectedOption()
    const processSelection = e.map(({ value }) => value).join(',');
    setSelectedOption(processSelection);
  };

  return (
    <>
    <SponsorTitle>
      BE A SPONSOR
    </SponsorTitle>
    <SponsorsFormWrapper>
      <TextField placeholder='Company name' />
      <TextField placeholder='Contact' />
      <span>What would you like to contribute?</span>
      <Suspense fallback={<div>Loading Options...</div>}>
        <Select
          options={options}
          isMulti
          onChange={onSelect}
        />
      </Suspense>
      <PrimaryButton>
        Be a Sponsor
      </PrimaryButton>
      <h3>We will be in touch with you shortly</h3>
    </SponsorsFormWrapper>
    </>
  );
}

export default SponsorsForm;
