import React, { useState } from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';
import { FundApplication } from '../../../shared/interfaces/forms.interface';
import FormsService from '../../../shared/services/forms.service';
import {
  LoadingSpinner,
  SecondaryButton,
  SuccessText,
  TextArea,
  TextField,
} from '../../elements';

const ApplyFundFormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const ApplyFundFormHeader = styled.h1`
  font-size: 1.8em;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 40px;
  color: white;

  @media (min-width: 415px) {
    font-size: 2rem;
  }
`;

const ApplyFundSection = styled.div`
  background-color: ${StylesSchema.DarkGrey};
  border-top: 2px solid ${StylesSchema.Yellow};
  padding-bottom: 40px;
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

  /**
   * set loading state when awaiting response.
   * show success message, reset form after response is returned
   * @param event
   */
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

  /**
   * removes form submittion success text upon re-focusing of form
   */
  const clearSubmitMessage = () => {
    if (!isSubmitted) {
      return;
    }
    setIsSubmitted(false);
  };

  return (
    <ApplyFundSection id='applyForFund'>
      <ApplyFundFormHeader>
        APPLY FOR THE FUND
      </ApplyFundFormHeader>
      <ApplyFundFormWrapper
        onSubmit={submitForm}
        onFocus={clearSubmitMessage}
      >
        <TextField
          required
          placeholder='Company'
          aria-label='Company Name'
          value={fundForm.companyName}
          disabled={isLoading}
          onChange={(e) => setFundForm({
            ...fundForm,
            companyName: e.target.value,
          })}
        />
        <TextField
          required
          placeholder='Company size'
          aria-label='Company Size'
          value={fundForm.companySize}
          disabled={isLoading}
          onChange={(e) => setFundForm({
            ...fundForm,
            companySize: e.target.value,
          })}
        />
        <TextField
          required
          type='email'
          placeholder='Company Email'
          aria-label='Company Email'
          value={fundForm.companyEmail}
          disabled={isLoading}
          onChange={(e) => setFundForm({
            ...fundForm,
            companyEmail: e.target.value,
          })}
        />
        <TextArea
          required
          aria-label='Business Description'
          placeholder='Tell us about your business'
          rows={4}
          value={fundForm.businessDescription}
          disabled={isLoading}
          onChange={(e) => setFundForm({
            ...fundForm,
            businessDescription: e.target.value,
          })}
        />
        <TextArea
          required
          aria-label='Business Challenge'
          placeholder='What is the biggest challenge for your business to get online?'
          rows={4}
          value={fundForm.businessChallenge}
          disabled={isLoading}
          onChange={(e) => setFundForm({
            ...fundForm,
            businessChallenge: e.target.value,
          })}
        />
        <TextArea
          required
          aria-label='Business Priority'
          placeholder='What is the current top priority for your business?'
          rows={4}
          value={fundForm.businessPriority}
          disabled={isLoading}
          onChange={(e) => setFundForm({
            ...fundForm,
            businessPriority: e.target.value,
          })}
        />
        <SecondaryButton
          type='submit'
          disabled={isLoading}
        >
          {
            isLoading
              ? <LoadingSpinner type='secondary' />
              : 'Submit'
          }
        </SecondaryButton>
        {
          isSubmitted && (
            <SuccessText type='light'>
              Thank you. Your application has been submitted.
              {' '}
              <br />
              {' '}
              We will be in touch with you shortly if we
              are able to support your application.
            </SuccessText>
          )
        }
      </ApplyFundFormWrapper>

    </ApplyFundSection>
  );
};

export default ApplyFundForm;
