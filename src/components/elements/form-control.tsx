import styled, { css } from "styled-components";
import { StylesSchema } from "../../shared/enums/styles";
import React from "react";

const formControlStyles = css`
  border: none;
  border-radius: 1px;
  box-sizing: border-box;
  background-color: ${StylesSchema.Yellow};
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  margin: 0.5rem;
  padding: 0.8rem;
  width: 100%;

  &:focus {
    outline: 1px solid ${StylesSchema.Yellow};
    outline-offset: 1px;
  }

  &::placeholder {
    color: rgb(117, 117, 117);
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const TextField = styled.input`
  ${formControlStyles}
`;

export const TextArea = styled.textarea`
  ${formControlStyles}
`;

export const SuccessText = styled.span`
  text-align: center;
  width: 50%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ReactSelect = React.lazy(() => import('react-select'));

export const Select = styled(ReactSelect)`
  margin: 0.5rem;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;