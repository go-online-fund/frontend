import React from 'react';
import styled, { css } from 'styled-components';
import Communication from '../../../assets/icons/communication.png';
import Delivery from '../../../assets/icons/delivery.png';
import Learning from '../../../assets/icons/learning.png';
import Marketing from '../../../assets/icons/marketing.png';
import Website from '../../../assets/icons/website.png';

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

const MoveOnlineTitle = styled.h1`
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 40px;
  font-size: 2em;
  padding-top: 40x
`;

const MoveOnlineDescription = styled.span`
  color: #FBC91B;
  font-weight: bold;
  text-transform: uppercase;
`;

const LearningPoint = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  text-transform: uppercase;

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
  width: 300px;
  height: 200px;
`

const CommunicationIcon = styled.img`
  width: 400px;
  height: 250px;
`;

const DeliveryIcon = styled.img`
  width: 420px;
  height: 250px;
`;

const WebsiteIcon = styled.img`
  width: 400px;
  height: 220px
`;

const MarketingIcon = styled.img`
  width: 400px;
  height: 220px
`;

const LearningIcon = styled.img`
  width: 420px;
  height: 200px
`;

const MoveOnline: React.FC = () => {
  return (
    <MoveOnlineWrapper>
      <MoveOnlineTitle>Your Business is determined to <MoveOnlineDescription>succeed  online</MoveOnlineDescription>, BUT you need</MoveOnlineTitle>
      <LearningPoint>
          <CommunicationIcon src={Communication} alt='communication icon' />
        <LearningTitle>Communication Tool</LearningTitle>
        <LearningDescription>Communication tools for your staff</LearningDescription>
      </LearningPoint>
      <LearningPoint>
          <DeliveryIcon src={Delivery} alt='delivery icon' />
        <LearningTitle>Delivery</LearningTitle>
        <LearningDescription>A delivery method for your goods/services</LearningDescription>
      </LearningPoint>
      <LearningPoint>
        <WebsiteIcon src={Website} alt='website icon' />
        <LearningTitle>Website</LearningTitle>
        <LearningDescription>Build a website</LearningDescription>
      </LearningPoint>
      <LearningPoint>
          <MarketingIcon src={Marketing} alt='marketing icon' />
      <LearningTitle>Marketing</LearningTitle>
      <LearningDescription>Market your products/services via social media</LearningDescription>
      </LearningPoint>
      <LearningPoint>
          <LearningIcon src={Learning} alt='learning icon' />
        <LearningTitle>Learning</LearningTitle>
        <LearningDescription>Online learning/teaching platform</LearningDescription>
      </LearningPoint>
    </MoveOnlineWrapper>
  );
}

export default MoveOnline;
