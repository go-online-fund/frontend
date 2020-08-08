import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';


interface SponsorHelpOption {
  value: string;
  label: string;
}

const SponsorSection = styled.div`
  background-color: ${StylesSchema.Yellow};
  margin: 0 auto;
  padding-top: 60px;
  text-align: center;
`;

// const SponsorsFormWrapper = styled.form`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   padding: 2rem;
//   background-color: ${StylesSchema.Yellow};
// `;

const BigTextHeader = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const SmallTextHeader = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0 0 40px;
  text-transform: uppercase;

  @media (min-width: 415px) {
    font-size: 71px;
  }
`;

const NormalTextHeader = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0 0 15px;
  text-transform: uppercase;
`;

const SponsorDescription = styled.p`
  text-align: center;
  padding-bottom: 80px;
  color: black;
  line-height: 2;
`;

const SponsorsForm: React.FC = () => (
  <SponsorSection id='beASponsor'>
    <BigTextHeader>Big Business</BigTextHeader>
    <NormalTextHeader>Helps</NormalTextHeader>
    <SmallTextHeader>Small Business</SmallTextHeader>
    <SponsorDescription>
      Applications are now closed.
      <br />
      Thank you for supporting us on this journey!
    </SponsorDescription>
  </SponsorSection>
);

export default SponsorsForm;
