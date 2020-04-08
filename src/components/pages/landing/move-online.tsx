import React from 'react';
import styled, { css } from 'styled-components';
import Communication from '../../../assets/icons/communication.svg';
import Delivery from '../../../assets/icons/delivery.svg';
import Learning from '../../../assets/icons/learning.svg';
import Marketing from '../../../assets/icons/marketing.svg';
import Website from '../../../assets/icons/website.svg';

const MoveOnlineWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 2rem 2rem;
`;

const MoveOnlineTitle = styled.h1`
  text-align: center;
  font-size: 2em;
  margin-bottom: 40px;
  padding-top: 40x
  text-transform: uppercase;
  width: 100%;
`;

const MoveOnlineDescription = styled.span`
  color: #FBC91B;
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

const imageSize = css`
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const CommunicationIcon = styled.img`
  ${imageSize}
`;

const DeliveryIcon = styled.img`
  ${imageSize}
`;

const WebsiteIcon = styled.img`
  ${imageSize}
`;

const MarketingIcon = styled.img`
  ${imageSize}
`;

const LearningIcon = styled.img`
  ${imageSize}
`;

const MoveOnline: React.FC = () => (
  <MoveOnlineWrapper>
    <MoveOnlineTitle>
      <MoveOnlineDescription>The Fund</MoveOnlineDescription>
      {' '}
      will be used to help small businesses succeed online
    </MoveOnlineTitle>
    <LearningPointHalfFlex>
      <CommunicationIcon src={Communication} alt='communication icon' />
      <LearningTitle>Communication Tool</LearningTitle>
      <LearningDescription>Communication tools for your staff</LearningDescription>
    </LearningPointHalfFlex>
    <LearningPointHalfFlex>
      <DeliveryIcon src={Delivery} alt='delivery icon' />
      <LearningTitle>Delivery</LearningTitle>
      <LearningDescription>A delivery method for your goods/services</LearningDescription>
    </LearningPointHalfFlex>
    <LearningPointThirdFlex>
      <WebsiteIcon src={Website} alt='website icon' />
      <LearningTitle>Website</LearningTitle>
      <LearningDescription>Build a website</LearningDescription>
    </LearningPointThirdFlex>
    <LearningPointThirdFlex>
      <MarketingIcon src={Marketing} alt='marketing icon' />
      <LearningTitle>Marketing</LearningTitle>
      <LearningDescription>Market your products/services via social media</LearningDescription>
    </LearningPointThirdFlex>
    <LearningPointThirdFlex>
      <LearningIcon src={Learning} alt='learning icon' />
      <LearningTitle>Learning</LearningTitle>
      <LearningDescription>Online learning/teaching platform</LearningDescription>
    </LearningPointThirdFlex>
  </MoveOnlineWrapper>
);

export default MoveOnline;
