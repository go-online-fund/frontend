import React from 'react';
import styled from 'styled-components';
import SmallBusiness from './small-business';
import HowItWorks from './how-it-works';
import OurValue from './our-value';
import Network from './network';
import Resources from "./resouces";

const TheFundWrapper = styled.section`
  font-family: Montserrat, sans-serif;
`;

const TheFund: React.FC = () => (
  <TheFundWrapper>
    <SmallBusiness />
    <HowItWorks />
    <OurValue />
    <Network />
    <Resources />
  </TheFundWrapper>
);

export default TheFund;
