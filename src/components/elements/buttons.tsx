import styled from "styled-components";
import { StylesSchema } from "../../shared/enums/styles";

export const PrimaryButton = styled.button `
  background: linear-gradient(to bottom, #B3B3B3 -200%, #2A2A2A 100%);
  border: 0;
  color: ${StylesSchema.White};
  font-family: 'Raleway', sans-serif;
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
