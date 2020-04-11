import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';

// to do, include other button styles
// eslint-disable-next-line import/prefer-default-export
export const PrimaryButton = styled.button`
  align-items: center;
  background-image: ${StylesSchema.BlackGradient};
  border: 0;
  color: ${StylesSchema.White};
  display: flex;
  font-family: 'Proxima Nova', sans-serif;
  font-size: 1.2rem;
  justify-content: center;
  margin: 2rem 0;
  padding: 1rem 0;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:active, &:focus {
    outline-color: ${StylesSchema.Yellow}; 
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${StylesSchema.Yellow};
  background-image: none;
  color: ${StylesSchema.Black};
`;

export const RoundedPrimaryButton = styled.button`
  background-color: ${StylesSchema.Black};
  border: 1px transparent solid;
  border-radius: 20px;
  box-sizing: content-box;
  color: ${StylesSchema.White};
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  width: 200px;
  
  &:hover {
    cursor: pointer
  }
`;

export const RoundedSecondaryButton = styled(RoundedPrimaryButton)`
  background: ${StylesSchema.Yellow};
  color: ${StylesSchema.Black};
`;
