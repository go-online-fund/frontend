import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, TextArea, SuccessText } from '../../elements/form-control';
import { PrimaryButton } from '../../elements/buttons';
import { FundApplication } from '../../../shared/interfaces/forms.interface';
import FormsService from '../../../shared/services/forms.service';
import Loading from "../../common/loading";

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
  color: white;
  
  @media (max-width: 415px) {
    font-size: 1.8em
  }
`;

const ApplyFundSection = styled.div`
  background: #2c2c2c;
  border-top: 2px solid #fbc91b;
  padding-bottom: 40px
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
  const [isLoading, setIsLoading] = useState(false);
  const [fundForm, setFundForm] = useState<FundApplication>(defaultForm);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const responseStatus = await FormsService.postFundApplication(fundForm);
    if (responseStatus === 200) {
      setIsLoading(false);
      setFundForm(defaultForm);
      setIsSubmitted(true);
    }
  };

  return (
    <ApplyFundSection>
      <ApplyFundFormHeader id='applyForFund'>
        APPLY FOR THE FUND
          </ApplyFundFormHeader>
      {
        !isLoading && !isSubmitted && (
          <ApplyFundFormWrapper onSubmit={submitForm}>
            <TextField
              style={{ background: 'white' }}
              required
              placeholder='Company'
              value={fundForm.companyName}
              onChange={(e) => setFundForm({
                ...fundForm,
                companyName: e.target.value,
              })}
            />
            <TextField
              style={{ background: 'white' }}
              required
              placeholder='Company size'
              value={fundForm.companySize}
              onChange={(e) => setFundForm({
                ...fundForm,
                companySize: e.target.value,
              })}
            />
            <TextField
              style={{ background: 'white' }}
              required
              type='email'
              placeholder='Company Email'
              value={fundForm.companyEmail}
              onChange={(e) => setFundForm({
                ...fundForm,
                companyEmail: e.target.value,
              })}
            />
            <TextArea
              style={{ background: 'white' }}
              required
              placeholder='Tell us about your business'
              rows={4}
              value={fundForm.businessDescription}
              onChange={(e) => setFundForm({
                ...fundForm,
                businessDescription: e.target.value,
              })}
            />
            <TextArea
              style={{ background: 'white' }}
              required
              placeholder='What is the biggest challenge for your business to get online?'
              rows={4}
              value={fundForm.businessChallenge}
              onChange={(e) => setFundForm({
                ...fundForm,
                businessChallenge: e.target.value,
              })}
            />
            <TextArea
              style={{ background: 'white' }}
              required
              placeholder='What is the current top priority for your business?'
              rows={4}
              value={fundForm.businessPriority}
              onChange={(e) => setFundForm({
                ...fundForm,
                businessPriority: e.target.value,
              })}
            />
            <PrimaryButton
              style={{ background: '#fbc91b', color: 'black' }}
              type='submit'
            >
              Submit
                </PrimaryButton>
          </ApplyFundFormWrapper>
        )
      }
      {
        isLoading && !isSubmitted && (
          <Loading />
        )
      }
      {
        isSubmitted && !isLoading && (
          <SuccessText type='light'>
            Thank you. Your application has been submitted. <br /> We will be in touch with you shortly if we
                are able to support your application.
          </SuccessText>
        )
      }
    </ApplyFundSection>
  );
}

export default ApplyFundForm;
