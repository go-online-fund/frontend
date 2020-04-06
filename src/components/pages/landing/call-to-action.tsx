import React from 'react';
import styled from 'styled-components';
import {StylesSchema} from '../../../shared/enums/styles';

const CallToActionHeader = styled.h1`
  text-align: justify;
  font-size: 2em;
  font-weight: bold;
  
   @media (max-width: 415px) {
    font-size: 18px   
   }
`;

const CallToActionHighlight = styled.span`
  font-weight: bold;
  font-size: 1.8em;
  color: white;
  
  @media (max-width: 415px) {
    font-size: 32px 
  }
`;

const CallToActionWrapper = styled.section`
  align-items: center;
  background-color: ${StylesSchema.Yellow};
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;  
  position: relative;
  height: 310px;
  border-bottom: 2px solid white;
`;

const CallToActionVideo = styled.div`
   @media (max-width: 415px) {
     margin-top: 40px;
     width: 90vw;
     height: 250px;
   }
  height: 350px;
  width: 40vw;
  border: 3px solid white;
  border-radius: 5px;
  position: absolute;
  background: black;
  top: 200px  
`;

const HighlightDescription = styled.span`
  font-size: 18px;
  font-weight: bold;
  
  @media (max-width: 415px) {
    font-size: 16px;
  }
`;

const CallToAction: React.FC = () => {
    return (
        <CallToActionWrapper>
            <CallToActionHeader>HELP <CallToActionHighlight>BUSINESS</CallToActionHighlight> MOVE <CallToActionHighlight>ONLINE</CallToActionHighlight></CallToActionHeader>
            <HighlightDescription>Here at The Nas Company, we believe all businesses can play a part to help the economy
                during the COVID-19 situation.
            </HighlightDescription>
            <CallToActionVideo/>
        </CallToActionWrapper>
    );
}

export default CallToAction;
