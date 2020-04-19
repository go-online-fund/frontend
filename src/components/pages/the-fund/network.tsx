import React from 'react';
import styled, { css } from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';

const NetworkWrapper = styled.section`
  text-align: center;
`;

const NetworkDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const NetworkStyles = css`
  box-sizing: border-box;
  padding: 0 10px 60px;
  text-align: center;

  @media (min-width: 576px) {
    width: 50%;
  }
`;

const Company = styled.div`
  ${NetworkStyles}
  background: ${StylesSchema.DarkGrey};
  color: ${StylesSchema.White};

  @media (min-width: 576px) {
    text-align: left;
    padding: 0 160px 100px 40px;
  }
`;

const Sponsor = styled.div`
  ${NetworkStyles}
  background-color: ${StylesSchema.Yellow};
  color: ${StylesSchema.Black};

  @media (min-width: 576px) {
    text-align: right;
    padding: 0 40px 160px 100px;
  }
`;

const NetworkCompanyHeader = styled.h2`
  font-size: 102px;
  padding-top: 20px;
  margin-bottom: 0;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 82px;
    padding-top: 0;
  }
`;

const CompanySmallHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 0;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const CompanyDesc = styled.p`
  color: white;
  padding-top: 10px;
  font-size: 22px;
  font-weight: normal;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const NetworkSponsorHeader = styled.h2`
  font-size: 102px;
  color: black;
  padding-top: 20px;
  margin-bottom: 0;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 82px;
    padding-top: 0;
  }
`;

const SponsorSmallHeader = styled.h1`
  color: black;
  font-size: 32px;
  font-weight: bold;
  margin-top: 0;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const SponsorDesc = styled.p`
  color: black;
  padding-top: 10px;
  font-size: 22px;
  font-weight: normal;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Network: React.FC = () => (
  <NetworkWrapper>
    <NetworkDiv>
      <Company>
        <NetworkCompanyHeader>50+</NetworkCompanyHeader>
        <CompanySmallHeader>Beneficiaries</CompanySmallHeader>
        <CompanyDesc>
          in different industries ranging from F&B, consumer products, technology to art and designs
        </CompanyDesc>
      </Company>
      <Sponsor>
        <NetworkSponsorHeader>40+</NetworkSponsorHeader>
        <SponsorSmallHeader>Sponsors</SponsorSmallHeader>
        <SponsorDesc>
          with expertise and resources in multiple industries
          ranging from e-commerce, website services, payment, digital marketing to cyber security
        </SponsorDesc>
      </Sponsor>
    </NetworkDiv>
  </NetworkWrapper>
);

export default Network;
