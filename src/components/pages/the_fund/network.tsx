import React from 'react';
import styled from 'styled-components';

const NetworkWrapper = styled.section`
  text-align: center;
`;

const NetworkDiv = styled.div`
  display: flex;
  flex-direction: row;
  
   @media (max-width: 415px) {
    display: flex;
    flex-direction: column
  }
`;

const Company = styled.div`
  background: black;
  flex-basis: 45%;
  color: white;
  text-align: left;
  padding-right: 80px;
  padding-right: 160px;
  padding-left: 40px;
  padding-bottom: 100px;
  
   @media (max-width: 415px) {
    flex-basis: 100%;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    padding-bottom: 60px;
  }
`;

const NetworkCompanyHeader = styled.h2`
  font-size: 102px;
  padding-top: 20px;  
  margin-bottom: 0px;
  font-weight: bold;
  
  @media (max-width: 415px) {
    font-size: 82px;
    padding-top: 0px
  }
`;

const CompanySmallHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 0px;
  
  @media (max-width: 415px) {
    font-size: 22px;
  }
  
`;

const CompanyDesc = styled.p`
  color: white;
  padding-top: 10px;
  font-size: 22px;
  font-weight: normal;
  text-align: justify;
  
  @media (max-width: 415px) {
    font-size: 18px;
  }
`;

const Sponsor = styled.div`
  flex-basis: 45%;
  color: black;
  text-align: right;
  padding-right: 40px;
  padding-left: 160px;
  background: #fbc91b;
  padding-bottom: 100px;
  
  @media (max-width: 415px) {
    flex-basis: 100%;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    padding-bottom: 60px   
  }
`;

const NetworkSponsorHeader = styled.h2`
  font-size: 102px;
  color: black;
  padding-top: 20px;  
  margin-bottom: 0px;
  font-weight: bold;
  
  @media (max-width: 415px) {
    font-size: 82px;
    padding-top: 0px
  }
`;

const SponsorSmallHeader = styled.h1`
  color: black;
  font-size: 32px;
  font-weight: bold;
  margin-top: 0px;
  
  @media (max-width: 415px) {
    font-size: 22px;
  }
`;

const SponsorDesc = styled.p`
  color: black;
  padding-top: 10px;
  font-size: 22px;
  font-weight: normal;
  text-align: justify;
  
  @media (max-width: 415px) {
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
