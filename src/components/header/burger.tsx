import React from 'react';
import styled, { css } from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';

type StyledBurgerProps = Omit<BurgerProps, 'setOpen'>;

const BurgerItemStyles = css<StyledBurgerProps>`
  width: 2rem;
  height: 0.25rem;
  background: ${({ open }) => (open ? StylesSchema.Black : StylesSchema.White)};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
`;

const StyledBurger = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  padding: 0;
  width: 2rem;
  z-index: 101;
  
  @media (max-width: 415px) {
   margin-right: 25px
  }
  
  @media (min-width: 768px){
    display: none;
  }
  
  &:focus {
    outline: none;
  }
`;

const Bun = styled.div<StyledBurgerProps>`
  ${BurgerItemStyles}

  &:first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:last-child {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

const Patty = styled.div<StyledBurgerProps>`
  ${BurgerItemStyles}
  opacity: ${({ open }) => (open ? '0' : '1')};
  transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
`;

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => (
  <StyledBurger onClick={() => setOpen(!open)}>
    <Bun open={open} />
    <Patty open={open} />
    <Bun open={open} />
  </StyledBurger>
);

export default Burger;
