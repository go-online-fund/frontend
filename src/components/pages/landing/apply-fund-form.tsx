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

const ApplyFundFormHeader = styled.h1`
 text-align: center;
 font-weight: bold;
 text-transform: uppercase;
 padding-top: 40px;
 color: white
`;

const ApplyFundFormHeaderHighLight = styled.span`
 color: #fbc91b;
 font-weight: bold;
`;

const ApplyFundSection = styled.div`
 background: linear-gradient(to bottom, #B3B3B3 -200%, #2A2A2A 100%);
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
      <ApplyFundSection>
          <ApplyFundFormHeader id='applyForFund'>We're here to <ApplyFundFormHeaderHighLight>support</ApplyFundFormHeaderHighLight></ApplyFundFormHeader>
    <ApplyFundFormWrapper>
      <TextField style={{background: 'white'}}
          required
        placeholder='Company'
        onChange={(e) => setFundForm({
          ...fundForm,
          companyName: e.target.value,
        })}
      />
      <TextField style={{background: 'white'}}
          required
        placeholder='Company size' 
        onChange={(e) => setFundForm({
          ...fundForm,
          companySize: e.target.value,
        })}
      />
      <TextField style={{background: 'white'}}
          required
          type="email"
        placeholder='Company Email'
        onChange={(e) => setFundForm({
          ...fundForm,
          companyEmail: e.target.value,
        })}
      />
      <TextArea style={{background: 'white'}}
          required
        placeholder='Tell us about your business' 
        rows={4} 
        onChange={(e) => setFundForm({
          ...fundForm,
          businessDescription: e.target.value,
        })}
      />
      <TextArea style={{background: 'white'}}
          required
        placeholder='What is the biggest challenge for your business to get online?'
        rows={4} 
        onChange={(e) => setFundForm({
          ...fundForm,
          businessChallenge: e.target.value,
        })}
      />
      <TextArea style={{background: 'white'}}
          required
        placeholder='What is the current top priority for your business?' 
        rows={4} 
        onChange={(e) => setFundForm({
          ...fundForm,
          businessPriority: e.target.value,
        })}
      />
      <PrimaryButton style={{background: '#fbc91b', color: 'black'}}
        type='submit'
        // onClick={submitForm}
      >
        Apply For The Fund
      </PrimaryButton>
      {isSubmitted && (
        <SuccessText>
          Thank you. Your application has been submitted. We will be in touch with you shortly if we are able to support your application.
        </SuccessText>
      )}
    </ApplyFundFormWrapper>
          </ApplyFundSection>
  );
}

export default ApplyFundForm;
