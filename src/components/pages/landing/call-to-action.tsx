import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';

const CallToActionHeader = styled.h1`
  font-size: 2em
  text-align: justify;
`;

const CallToActionWrapper = styled.section`
  align-items: center;
  background-color: ${StylesSchema.Yellow};
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  height: 320px;
  padding: 2rem 2rem;  
  position: relative;
`;

const CallToActionVideo = styled.div`
  background: black;
  border: 3px solid white;
  border-radius: 5px;
  height: 350px;
  position: absolute;
  top: 200px;
  width: 40vw;

  @media (max-width: 415px) {
    margin-top: 40px;
    width: 80vw
  }
`;

const HighlightDescription = styled.span`
  font-size: 18px
`;

const CallToAction: React.FC = () => (
  <CallToActionWrapper>
    <CallToActionHeader>WHY DO WE WANT TO DO THIS?</CallToActionHeader>
    <HighlightDescription>Here at The Nas Company, we believe all businesses can play a part to help the economy during this COVID-19 situation.
      </HighlightDescription>
      <CallToActionVideo />
  </CallToActionWrapper>
);

export default CallToAction;
