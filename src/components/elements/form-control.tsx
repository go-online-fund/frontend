import styled, { css } from 'styled-components';
import React from 'react';
import { StylesSchema } from '../../shared/enums/styles';

const formControlStyles = css`
  border: none;
  border-radius: 1px;
  box-sizing: border-box;
  background-color: ${StylesSchema.White};
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

interface SuccessTextProps {
  type: 'dark' | 'light';
}

export const SuccessText = styled.div<SuccessTextProps>`
  color: ${({ type }) => (type === 'dark' ? StylesSchema.White : StylesSchema.Yellow)};
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
`;

const ReactSelect = React.lazy(() => import('react-select'));

export const Select = styled(ReactSelect)`
  margin: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
