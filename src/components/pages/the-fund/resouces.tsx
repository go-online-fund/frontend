import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { StylesSchema } from '../../../shared/enums/styles';
import { SecondaryButton } from '../../elements';
import partnersList from '../landing/partners.json';

interface HelpAreasGridItemProps {
  isEven: boolean;
}

const ResourcesWrapper = styled.section`
  align-items: center;
  background-color: ${StylesSchema.White};
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px 2rem;
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

const HelpAreasGridBox = styled.div<HelpAreasGridItemProps>`
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
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const HelpAreasGridItem = styled.div`
  width: 225px;
  display: flex;
  flex-flow: column wrap;
  margin: 2rem;
`;

const PartnerIcon = styled.img`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: transform 0.5s ease;
  padding: 0.5em;
  max-width: 40%;
  max-height: 50px;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;


const RESOURCES = ['website', 'payment', 'marketing', 'government grants', 'automation'];

const Resources: React.FC = () => {
  const history = useHistory();

  return (
    <ResourcesWrapper>
      <ResourcesHeader>Our Resources</ResourcesHeader>
      <HelpAreasGrid>
        {
        RESOURCES.map((resource, index) => {
          const partners = partnersList.filter(({ supportAreas }) => supportAreas.includes(resource));

          return (
            <HelpAreasGridItem>
              <HelpAreasGridBox isEven={index % 2 === 0}>{resource}</HelpAreasGridBox>
              <IconsContainer>
                {
                  partners.map(({ companyName, companyLogo }) => (
                    <PartnerIcon
                      key={companyName}
                      alt={companyName}
                      title={companyName}
                      src={companyLogo}
                    />
                  ))
                }
              </IconsContainer>
            </HelpAreasGridItem>
          );
        })
      }
      </HelpAreasGrid>
      <SecondaryButton
        onClick={() => history.push('/', {
          scrollTo: 'applyForFund',
        })}
      >
        Apply now
      </SecondaryButton>
    </ResourcesWrapper>
  );
};

export default Resources;
