import React from 'react';
import styled from 'styled-components';
import { ReactVideoPlay, VideoSourceType } from 'react-video-play';
import { StylesSchema } from '../../../shared/enums/styles';
import 'react-video-play/public/css/react-video-play.css';

const VIDEO_HEIGHT = '190px';
const VIDEO_HEIGHT_MD = '340px';
const VIDEO_HEIGHT_LG = '470px';

const CallToActionHeader = styled.p`
  font-weight: bold;  
  font-size: 1.4rem;
  text-align: left;
  padding: 0px;
  margin: calc(1.8rem + 66px - 2rem) 0 1.8rem;

  @media (min-width: 415px) {
    font-size: 2.5em;
    text-align: center;
    margin: calc(2.5rem + 66px - 2rem) 0 2.5rem;
  }
`;

const CallToActionHighlight = styled.span`
  font-weight: bold;
  color: white;  
`;

const CallToActionWrapper = styled.section`
  align-items: center;
  background-color: ${StylesSchema.Yellow};
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem calc(2rem + ${VIDEO_HEIGHT} /2) 2rem;  
  position: relative;
  border-bottom: 2px solid white;
  
  @media (min-width: 415px) {
    padding-bottom: calc(2rem + ${VIDEO_HEIGHT_MD} /2)
  }

  @media (min-width: 2000px) {
    padding-bottom: calc(2rem + ${VIDEO_HEIGHT_LG} /2)

  }
`;

const CallToActionVideo = styled.div`
  border: 3px solid white;
  border-radius: 5px;
  height: ${VIDEO_HEIGHT};
  // margin-top: 1.8rem;
  width: 90vw;
  position: absolute;
  bottom: calc(-${VIDEO_HEIGHT} / 2);
  
  @media (min-width: 415px) {
    bottom: calc(-${VIDEO_HEIGHT_MD} / 2);
    height: ${VIDEO_HEIGHT_MD};
    width: 60%;
  }

  @media (min-width: 736px) {
    width: 50%;
  }
   
  @media (min-width: 2000px) {
    bottom: calc(-${VIDEO_HEIGHT_LG} / 2);
    height: ${VIDEO_HEIGHT_LG};
    width: 50%;
  }
`;

const HighlightDescription = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: justify;

  @media (min-width: 415px) {
    font-size: 18px;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const src = [
  {
    name: 'video',
    source: [{
      source: 'https://res.cloudinary.com/doaxab4ly/video/upload/v1586312300/move_online_fund_zfgobo.mp4',
      type: VideoSourceType.video_mp4,
    }],
  },
];

const CallToAction: React.FC = () => (
  <CallToActionWrapper>
    <CallToActionHeader>
      HELP
      {' '}
      <CallToActionHighlight>BUSINESSES</CallToActionHighlight>
      {' '}
      MOVE
      {' '}
      <CallToActionHighlight>ONLINE</CallToActionHighlight>
    </CallToActionHeader>
    <HighlightDescription>
      Many small businesses are struggling with COVID-19 Circuit Breaker.
      They don’t know how to move online or they can’t afford to.
      <br />
      The Online Fund is meant to help small businesses in Singapore move their operations online.
    </HighlightDescription>
    <CallToActionVideo>
      <ReactVideoPlay sources={src} />
    </CallToActionVideo>
  </CallToActionWrapper>
);

export default CallToAction;
