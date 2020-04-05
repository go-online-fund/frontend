import React from 'react';
import styled from 'styled-components';
import { TextField, TextArea } from '../../elements/form-control';
import { PrimaryButton } from '../../elements/buttons';

const ApplyFundFormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const ApplyFundForm: React.FC = () => {
  return (
    <ApplyFundFormWrapper>
      <TextField placeholder='Company' />
      <TextField placeholder='Company size' />
      <TextArea placeholder='Tell us about your business' rows={4} />
      <TextArea placeholder='What is the biggest challenge for your business to get online?' rows={4} />
      <TextArea placeholder='What is the current top priority for your business?' rows={4} />
      <PrimaryButton>
        Apply
      </PrimaryButton>
    </ApplyFundFormWrapper>
  );
}

export default ApplyFundForm;
