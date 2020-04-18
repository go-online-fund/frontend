import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';

const HowItWorksWrapper = styled.section`
  align-items: center;
  text-align: center;
  display: flex;
  flex-flow: column wrap;
  padding-top: 40px;
  padding-bottom: 80px;
  background: ${StylesSchema.White};
`;

const HowItWorksHeader = styled.h1`
  color: black;
  font-size: 2em;
  font-weight: bold;
  padding-bottom: 20px;

  @media (min-width: 576px) {
    font-size: 2.5em;
  }
`;

const HowItWorksSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding: 0 2rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }

  @media (min-width: 1366px) {
    max-width: 80vw;
  }
`;

const Business = styled.div`
  @media (min-width: 576px) {
    flex-basis: 25%;
  }
`;

const BusinessHeader = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
  margin: 0.5rem 0 0 0;
`;

const BusinessDesc = styled.p`
  font-size: 18px;
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
`;

const ConnectionDiv = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-flow: column wrap;
  justify-content: center;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }

  @media (min-width: 1366px) {
    padding: 0;
  }
`;

const ConnectionDot = styled.div`
  background-image: url(https://d5htvn7530ipt.cloudfront.net/netflix/spoilers/8/images/dotted.png);
  background-repeat: space;
  background-size: 10px;
  width: 10px;
  height: 60px;

  @media (min-width: 768px) {
    height: 10px;
    flex: 1 0 auto;
  }
`;

const ConnectionHeader = styled.h1`
  font-size: 18px;
  font-weight: bold;
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 0.5rem 0;

  @media (min-width: 768px) {
    padding: 0 0.5rem;
  }

  @media (min-width: 1366px) {
    padding: 0 2rem;
  }
`;

const HighlightYellow = styled.span`
  color: ${StylesSchema.Yellow};
  font-size: 26px;
  font-weight: bold;
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
      <ConnectionDiv>
        <ConnectionDot />
        <ConnectionHeader>
          Let us
          <HighlightYellow> SUPPORT </HighlightYellow>
          <br />
          each other through COVID-19
        </ConnectionHeader>
        <ConnectionDot />
      </ConnectionDiv>
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
