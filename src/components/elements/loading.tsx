import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  type: 'primary' | 'secondary';
}

export const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div<SpinnerProps>`
  animation: ${rotation} 1s ease infinite;
  border-top: 3px solid ${({ type }) => (type === 'primary' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)')};
  border-radius: 50%;
  border-right: 3px solid transparent;
  height: 1.2rem;
  width: 1.2rem;
`;
