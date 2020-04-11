import styled, { keyframes } from 'styled-components';

export const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  animation: ${rotation} 1s ease infinite;
  border-top: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-right: 3px solid transparent;
  height: 1.2rem;
  width: 1.2rem;
`;
