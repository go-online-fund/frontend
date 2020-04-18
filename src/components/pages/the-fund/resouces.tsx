import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';

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

const HelpAreasGrid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2.4rem;
  }
`;

const HelpAreasGridItem = styled.section`
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  border: 1px solid ${StylesSchema.DarkGrey};
  border-radius: 2px;
  color: ${StylesSchema.DarkGrey};
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  height: 85px;
  justify-content: center;
  margin: 2rem;
  text-transform: uppercase;
  transition: transform 0.5s ease;
  width: 150px;

  &:hover {
    background-color: ${StylesSchema.DarkGrey};
    color: ${StylesSchema.White};
    transform: scale(1.05);

  }
`;

const Resources: React.FC = () => (
  <ResourcesWrapper>
    <ResourcesHeader>Our Resources</ResourcesHeader>
    <HelpAreasGrid>
      <HelpAreasGridItem>Website</HelpAreasGridItem>
      <HelpAreasGridItem>Payment</HelpAreasGridItem>
      <HelpAreasGridItem>Marketing</HelpAreasGridItem>
      <HelpAreasGridItem>Government Grants</HelpAreasGridItem>
      <HelpAreasGridItem>Automation</HelpAreasGridItem>
    </HelpAreasGrid>
  </ResourcesWrapper>
);

export default Resources;
