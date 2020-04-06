import styled from "styled-components";
import { StylesSchema } from "../../shared/enums/styles";

export const PrimaryButton = styled.button `
  background-image: ${StylesSchema.BlackGradient};
  border: 0;
  color: ${StylesSchema.White};
  font-family: 'Proxima Nova', sans-serif;
  font-size: 1.2rem;
  margin: 2rem 0;
  padding: 1rem 0;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  
  &:hover {
  cursor: pointer;
  opacity: 0.9
  }

  &:active, &:focus {
    outline-color: ${StylesSchema.Yellow}; 
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;
