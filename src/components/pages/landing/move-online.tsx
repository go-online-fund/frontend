import React from 'react';
import styled, { css } from 'styled-components';
import Communication from '../../../assets/icons/communication.svg';
import Delivery from '../../../assets/icons/delivery.svg';
import Learning from '../../../assets/icons/learning.svg';
import Marketing from '../../../assets/icons/marketing.svg';
import Website from '../../../assets/icons/website.svg';
import { StylesSchema } from '../../../shared/enums/styles';

interface LearningPointProps {
  title: string;
  description: string;
  alt: string;
  icon: string;
}

const LEARNING_POINTS_TOP_ROW = [
  {
    title: 'Communication Tool',
    description: 'Communication tools for your staff',
    alt: 'communication icon',
    icon: Communication,
  },
  {
    title: 'Delivery',
    description: 'A delivery method for your goods/services',
    alt: 'delivery icon',
    icon: Delivery,
  },
];

const LEARNING_POINTS_BOTTOM_ROW = [
  {
    title: 'Website',
    description: 'Build a website',
    alt: 'website icon',
    icon: Website,
  },
  {
    title: 'Marketing',
    description: 'Market your products/services via social media',
    alt: 'marketing icon',
    icon: Marketing,
  },
  {
    title: 'Learning',
    description: 'Online learning/teaching platform',
    alt: 'learning icon',
    icon: Learning,
  },
];

const MoveOnlineWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 2rem;
`;

const MoveOnlineTitle = styled.h1`
  text-align: center;
  font-size: 2em;
  margin-bottom: 40px;
  padding-top: 40px;
  text-transform: uppercase;
  width: 100%;
`;

const MoveOnlineDescription = styled.span`
  color: ${StylesSchema.Yellow};
  font-weight: bold;
  text-transform: uppercase;
`;

const LearningPointHalfFlex = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex: 1 0 50%;
  flex-direction: column;
  max-width: 50%;
  padding: 1rem 0;
  text-transform: uppercase;
`;

const LearningPointThirdFlex = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 50%;
  padding: 1rem 0;
  text-transform: uppercase;

  @media (min-width: 768px) {
    flex: 1 0 33%;
  }
`;

const LearningTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 0;
  text-transform: uppercase;
  text-align: center;
`;

const LearningDescription = styled.span`
  padding: 0 2rem;
  text-align: center;
`;

const LearningPointIcon = styled.img`
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const LearningPoint = ({
  icon, alt, title, description,
}: LearningPointProps) => (
  <>
    <LearningPointIcon
      src={icon}
      alt={alt}
    />
    <LearningTitle>{title}</LearningTitle>
    <LearningDescription>{description}</LearningDescription>
  </>
);

const MoveOnline: React.FC = () => (
  <MoveOnlineWrapper>
    <MoveOnlineTitle>
      <MoveOnlineDescription>The Fund</MoveOnlineDescription>
      {' '}
      will be used to help small businesses succeed online
    </MoveOnlineTitle>
    {
      LEARNING_POINTS_TOP_ROW.map(({
        title, description, alt, icon,
      }) => (
        <LearningPointHalfFlex>
          <LearningPoint title={title} description={description} alt={alt} icon={icon} />
        </LearningPointHalfFlex>
      ))
    }
    {
      LEARNING_POINTS_BOTTOM_ROW.map(({
        title, description, alt, icon,
      }) => (
        <LearningPointThirdFlex>
          <LearningPoint title={title} description={description} alt={alt} icon={icon} />
        </LearningPointThirdFlex>
      ))
    }
  </MoveOnlineWrapper>
);

export default MoveOnline;
