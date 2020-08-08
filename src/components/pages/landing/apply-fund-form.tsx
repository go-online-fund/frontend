import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';

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

const ApplyFundFormDescription = styled.p`
  text-align: center;
  padding-bottom: 80px;
  color: white;
  line-height: 2;
`;

const ApplyFundSection = styled.div`
  background-color: ${StylesSchema.DarkGrey};
  border-top: 2px solid ${StylesSchema.Yellow};
  padding-bottom: 40px;
`;

const ApplyFundForm: React.FC = () => (
  <ApplyFundSection id='applyForFund'>
    <ApplyFundFormHeader>
      APPLY FOR THE FUND
    </ApplyFundFormHeader>
    <ApplyFundFormDescription>
      We have closed the move online fund.
      <br />
      Be sure to keep a look out if there are any new developments in the future.
      <br />
      Take care and stay healthy!
    </ApplyFundFormDescription>
  </ApplyFundSection>
);

export default ApplyFundForm;
