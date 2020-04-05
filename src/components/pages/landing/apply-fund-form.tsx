import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, TextArea, SuccessText } from '../../elements/form-control';
import { PrimaryButton } from '../../elements/buttons';
import { FundApplication } from '../../../shared/interfaces/forms.interface';
import FormsService from '../../../shared/services/forms.service';

const ApplyFundFormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const defaultForm = {
  companyName: '', 
  companySize: '', 
  companyEmail: '', 
  businessDescription: '',
  businessChallenge: '',
  businessPriority: '',  
};

const ApplyFundForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fundForm, setFundForm] = useState<FundApplication>(defaultForm);

  const submitForm = async () => {
    const responseStatus = await FormsService.postFundApplication(fundForm);
    if (responseStatus === 200) {
      setFundForm(defaultForm);
      setIsSubmitted(true);
    }
  };

  return (
    <ApplyFundFormWrapper id='applyForFund'>
      <TextField 
        placeholder='Company'
        onChange={(e) => setFundForm({
          ...fundForm,
          companyName: e.target.value,
        })}
      />
      <TextField 
        placeholder='Company size' 
        onChange={(e) => setFundForm({
          ...fundForm,
          companySize: e.target.value,
        })}
      />
      <TextField 
        placeholder='Contact' 
        onChange={(e) => setFundForm({
          ...fundForm,
          companyEmail: e.target.value,
        })}
      />
      <TextArea 
        placeholder='Tell us about your business' 
        rows={4} 
        onChange={(e) => setFundForm({
          ...fundForm,
          businessDescription: e.target.value,
        })}
      />
      <TextArea 
        placeholder='What is the biggest challenge for your business to get online?'
        rows={4} 
        onChange={(e) => setFundForm({
          ...fundForm,
          businessChallenge: e.target.value,
        })}
      />
      <TextArea 
        placeholder='What is the current top priority for your business?' 
        rows={4} 
        onChange={(e) => setFundForm({
          ...fundForm,
          businessPriority: e.target.value,
        })}
      />
      <PrimaryButton 
        type='button'
        onClick={submitForm}
      >
        Apply
      </PrimaryButton>
      {isSubmitted && (
        <SuccessText>
          Thank you. Your application has been submitted. We will be in touch with you shortly if we are able to support your application.
        </SuccessText>
      )}
    </ApplyFundFormWrapper>
  );
}

export default ApplyFundForm;
