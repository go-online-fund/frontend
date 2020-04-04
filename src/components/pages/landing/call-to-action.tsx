import React from 'react';
import styled from 'styled-components';

const CallToActionWrapper = styled.section`
  background-color: #fbc91b;
  height: calc(100vh - 80px);
  padding: 2rem;
`;

const CallToAction: React.FC = () => {
  return (
    <CallToActionWrapper>
      <h1>Why do we want to do this?</h1>
      <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h2>
    </CallToActionWrapper>
  );
}

export default CallToAction;
