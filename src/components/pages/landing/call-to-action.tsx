import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';

const CallToActionHeader = styled.h1 `
  text-align: justify;
  font-size: 2em
`;

const CallToActionWrapper = styled.section`
  align-items: center;
  background-color: ${StylesSchema.Yellow};
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;  
  position: relative;
  height: 300px
`;

const CallToActionVideo = styled.div`

   @media (max-width: 415px) {
     margin-top: 40px
   }
  height: 300px;
  width: 600px;
  border: 3px solid white;
  border-radius: 5px;
  position: absolute;
  background: black;
  top: 200px  
`;

const HighlightDescription = styled.span`
  font-size: 18px
`;

const CallToAction: React.FC = () => {
  return (
    <CallToActionWrapper>
      <CallToActionHeader>WHY DO WE WANT TO DO THIS?</CallToActionHeader>
      <HighlightDescription>Here at The Nas Company, we believe all businesses can play a part to help the economy during this COVID-19 situation.
        </HighlightDescription>
        <CallToActionVideo />
    </CallToActionWrapper>
  );
}

export default CallToAction;
