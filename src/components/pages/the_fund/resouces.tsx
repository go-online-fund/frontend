import React from 'react';
import styled from 'styled-components';

const ResourcesWrapper = styled.section`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 80px;
  background: white
`;

const ResourcesHeader = styled.h1`
  color: black;
  font-size: 2.5em;
  font-weight: bold;
  padding-bottom: 20px;
  
  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

const Resources: React.FC = () => (
  <ResourcesWrapper>
    <ResourcesHeader>Our Resources</ResourcesHeader>
  </ResourcesWrapper>
);

export default Resources;
