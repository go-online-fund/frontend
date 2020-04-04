import React from 'react';
import styled from 'styled-components';

const CallToActionHeader = styled.h1 `
  text-align: justify;
  // width: 100%
`;

const CallToActionWrapper = styled.section`
  align-items: center;
  background-color: #fbc91b;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const CallToAction: React.FC = () => {
  return (
    <CallToActionWrapper>
      <CallToActionHeader>Why do we want to do this?</CallToActionHeader>
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</span>
    </CallToActionWrapper>
  );
}

export default CallToAction;
