import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';

type StyledBurgerProps = Omit<BurgerProps, 'setOpen'>; 

const StyledBurger = styled.button<StyledBurgerProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  padding: 0;
  width: 2rem;
  z-index: 10;
  
  @media (min-width: 768px){
    display: none;
  }
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ?  StylesSchema.Black : StylesSchema.White};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default Burger;