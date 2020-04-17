import React from 'react';
import styled from 'styled-components';

const HowItWorksWrapper = styled.section`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 80px;
  background: white
`;

const HowItWorksHeader = styled.h1`
  color: black;
  font-size: 2.5em;
  font-weight: bold;
  padding-bottom: 20px;
  
  @media (max-width: 415px) {
    font-size: 2em;
  }
`;

const HowItWorksSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-basis: wrap;
  align-items: center;
  
   @media (max-width: 415px) {
    display: block
  }
`;

const Business = styled.div`
  flex-basis: 30%;
  
   @media (max-width: 415px) {
    flex-basis: 100%;
  }
`;

const BusinessHeader = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
  margin-bottom: 10px
`;

const BusinessDesc = styled.p`
  font-size: 18px;
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
  margin-top: 10px
`;

const Connection = styled.div`
  flex-basis: 40%;
  
   @media (max-width: 415px) {
    flex-basis: 100%
  }
`;

const ConnectionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-basis: wrap;
  flex-direction: row;
  
   @media (max-width: 415px) {
    display: block
  }  
`;

const ConnectionDotDiv = styled.div`
  flex-basis: 30%;
  padding-top: 60px;
   @media (max-width: 415px) {
    flex-basis: 100%;
  }
`;

const ConnectionDot = styled.div`
  position: absolute; 
  background-image: url(https://d5htvn7530ipt.cloudfront.net/netflix/spoilers/8/images/dotted.png);
  background-size: 10px;
  width: 170px;
  height: 0.5%;
  
  @media (max-width: 415px) {
    margin-top: -40px;
    left: 50%;
    position: absolute;
    height: 2%;
    width: 10px;
  }  

`;

const ConnectionDesc = styled.div`  
  flex-basis: 40%;
  text-align: center;
  
   @media (max-width: 415px) {
    flex-basis: 100%
  }
`;

const ConnectionHeader = styled.h1`
  font-size: 18px;
  font-weight: bold;
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
`;

const HighlightYellow = styled.span`
  color: #fbc91b;
  font-size: 26px;
  font-weight: bold
`;


const HowItWorks: React.FC = () => (
  <HowItWorksWrapper>
    <HowItWorksHeader>How It Works?</HowItWorksHeader>
    <HowItWorksSection>
      <Business>
        <BusinessHeader>
          Small business
          <br />
          struggling to move online
        </BusinessHeader>
        <BusinessDesc>
          Indicate your business
          {' '}
          <br />
          challenges/needs
        </BusinessDesc>
      </Business>
      <Connection>
        <ConnectionDiv>
          <ConnectionDotDiv>
            <ConnectionDot />
            <ConnectionDot />
          </ConnectionDotDiv>
          <ConnectionDesc>
            <ConnectionHeader>
              Let us
              <HighlightYellow> SUPPORT </HighlightYellow>
              <br />
              each other through COVID-19
            </ConnectionHeader>
          </ConnectionDesc>
          <ConnectionDotDiv>
            <ConnectionDot />
            <ConnectionDot />
          </ConnectionDotDiv>
        </ConnectionDiv>
      </Connection>
      <Business>
        <BusinessHeader>
          Big business
          <br />
          offering resources
        </BusinessHeader>
        <BusinessDesc>
          Offer to contribute
          <br />
          your resources/expertise
        </BusinessDesc>
      </Business>
    </HowItWorksSection>
  </HowItWorksWrapper>
);

export default HowItWorks;
