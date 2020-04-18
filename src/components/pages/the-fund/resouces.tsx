import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';

interface HelpAreasGridItemProps {
  isEven: boolean;
}

const ResourcesWrapper = styled.section`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 80px;
  background-color: ${StylesSchema.White};
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

const HelpAreasGridItem = styled.section<HelpAreasGridItemProps>`
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  background-color: ${({ isEven }) => (isEven ? StylesSchema.DarkGrey : StylesSchema.Yellow)};
  background-color: ${({ isEven }) => (isEven ? StylesSchema.DarkGrey : StylesSchema.Yellow)};
  border-radius: 2px;
  color: ${({ isEven }) => (isEven ? StylesSchema.White : StylesSchema.DarkGrey)};
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  height: 125px;
  justify-content: center;
  margin: 2rem;
  text-transform: uppercase;
  transition: transform 0.5s ease;
  width: 225px;

  &:hover {
    background-color: ${({ isEven }) => (isEven ? StylesSchema.Yellow : StylesSchema.DarkGrey)};
    color: ${({ isEven }) => (isEven ? StylesSchema.DarkGrey : StylesSchema.White)};
    transform: scale(1.05);
  }
`;

const RESOURCES = ['Website', 'Payment', 'Marketing', 'Government Grants', 'Automation'];

const Resources: React.FC = () => (
  <ResourcesWrapper>
    <ResourcesHeader>Our Resources</ResourcesHeader>
    <HelpAreasGrid>
      {
        RESOURCES.map((resource, index) => <HelpAreasGridItem isEven={index % 2 === 0}>{resource}</HelpAreasGridItem>)
      }
    </HelpAreasGrid>
  </ResourcesWrapper>
);

export default Resources;
