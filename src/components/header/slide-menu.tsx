import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';

type StyledMenuProps = Omit<SlideMenuProps, 'onNavigation'>;

const StyledMenu = styled.nav<StyledMenuProps>`
  background: ${StylesSchema.White};
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  left: 0;
  overflow-y: hidden;
  padding: 2rem;
  position: absolute;
  text-align: center;
  top: 0;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.3s ease-in-out;
  width: 100vw;
  z-index: 100;

  @media (min-width: 768px){
    display: none;
  }
`;

const NavAnchor = styled.div`
  color: ${StylesSchema.Black};
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
  padding: 1.2rem 0;
  text-transform: uppercase;
  transition: color 0.3s linear;

  &:hover {
    color: ${StylesSchema.Yellow};
  }
`;

interface SlideMenuProps {
  open: boolean;
  onNavigation: (id: string) => void;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ open, onNavigation }) => (
  <StyledMenu open={open}>
    <NavAnchor onClick={() => onNavigation('applyForFund')}>
      Apply For Fund
    </NavAnchor>
    <NavAnchor onClick={() => onNavigation('applyForFund')}>
      Be a Sponsor
    </NavAnchor>
  </StyledMenu>
);

export default SlideMenu;
