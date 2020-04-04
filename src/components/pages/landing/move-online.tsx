import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Communication } from '../../../assets/icons/communication.svg';
import { ReactComponent as Delivery } from '../../../assets/icons/delivery.svg';
import { ReactComponent as Learning } from '../../../assets/icons/learning.svg';
import { ReactComponent as Marketing } from '../../../assets/icons/marketing.svg';
import { ReactComponent as Website } from '../../../assets/icons/website.svg';

const MoveOnlineWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const MoveOnlineTitle = styled.h2`
  text-align: center;
  width: 100%;
`;

const LearningPoint = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media (min-width: 768px) {
    flex: 1 0 50%;
  }
`;

const LearningTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 0;
  text-transform: uppercase;
`;

const LearningDescription = styled.span`
  padding: 0 2rem;
  text-align: center;
`;

const svgSize = css`
  width: 200px;
  height: 200px;
`

const CommunicationIcon = styled(Communication)`
  ${svgSize}
`;

const DeliveryIcon = styled(Delivery)`
  ${svgSize}
`;

const WebsiteIcon = styled(Website)`
  ${svgSize}
`;

const MarketingIcon = styled(Marketing)`
  ${svgSize}
`;

const LearningIcon = styled(Learning)`
  ${svgSize}
`;

const MoveOnline: React.FC = () => {
  return (
    <MoveOnlineWrapper>
      <MoveOnlineTitle>In order to move online</MoveOnlineTitle>
      <LearningPoint>
        <CommunicationIcon />
        <LearningTitle>Communication Tool</LearningTitle>
        <LearningDescription>You need communication tools for your staff</LearningDescription>
      </LearningPoint>
      <LearningPoint>
        <DeliveryIcon />
        <LearningTitle>Delivery</LearningTitle>
        <LearningDescription>You need a delivery method for your goods</LearningDescription>
      </LearningPoint>
      <LearningPoint>
        <WebsiteIcon />
        <LearningTitle>Website</LearningTitle>
        <LearningDescription>You need to build a website</LearningDescription>
      </LearningPoint>
      <LearningPoint>
      <MarketingIcon />
      <LearningTitle>Marketing</LearningTitle>
      <LearningDescription>You need to market your products/services via social media</LearningDescription>
      </LearningPoint>
      <LearningPoint>
        <LearningIcon />
        <LearningTitle>Learning</LearningTitle>
        <LearningDescription>You need online learning/teaching platform</LearningDescription>
      </LearningPoint>
    </MoveOnlineWrapper>
  );
}

export default MoveOnline;
