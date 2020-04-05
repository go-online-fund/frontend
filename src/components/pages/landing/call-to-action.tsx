import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';

const CallToActionHeader = styled.h1 `
  text-align: justify;
`;

const CallToActionWrapper = styled.section`
  align-items: center;
  background-color: ${StylesSchema.Yellow};
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const CallToAction: React.FC = () => {
  return (
    <CallToActionWrapper id='home'>
      <CallToActionHeader>Why do we want to do this?</CallToActionHeader>
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</span>
    </CallToActionWrapper>
  );
}

export default CallToAction;
