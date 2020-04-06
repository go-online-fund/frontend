import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';
import { ReactComponent as NasCompanyImage } from '../../assets/images/thenascompany.svg';
import Burger from './burger';
import SlideMenu from './slide-menu';

const HeaderWrapper = styled.header`
  background-image: linear-gradient(to bottom, #B3B3B3 -200%, #2A2A2A 100%);
  display: flex;
  padding: 1rem 2rem 1rem 0.5rem;
  justify-content: space-between;

  @media (min-width: 768px){
    text-align: center;
    align-items: center
  }
`;

const NavAnchor = styled.a`
  color: ${StylesSchema.LightGrey};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover, &:focus {
    color: ${StylesSchema.White};
  }
`;

const Navigation = styled.nav`
  display: none;

  @media (min-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    padding-top: 5px
  }
`;

const NasCompanyLogo = styled(NasCompanyImage)`
  height: 30px;
  width: 225px;
`;

// only import polyfill if scrollBehavior is not supported by browser
if (!('scrollBehavior' in document.documentElement.style)) {
	import('smoothscroll-polyfill').then((smoothscroll) => {
    smoothscroll.polyfill();
  });
}

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open])
  const smoothScroll = (target: string) => {
    if (open) {
      setOpen(false);
    }
    const targetElement = document.getElementById(target)?.offsetTop;
    window.scrollTo({ 
      top: targetElement, 
      behavior: 'smooth'
    });
  };

  return (
    <HeaderWrapper>
      <NasCompanyLogo />
      <Navigation>
        <NavAnchor onClick={() => smoothScroll('applyForFund')}>APPLY FOR FUND</NavAnchor>
        <NavAnchor onClick={() => smoothScroll('beASponsor')}>BE A SPONSOR</NavAnchor>
      </Navigation> 
      <Burger open={open} setOpen={setOpen} />
      <SlideMenu open={open} onNavigation={smoothScroll} />
    </HeaderWrapper>
  );
}

export default Header;
