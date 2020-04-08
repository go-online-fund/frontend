import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';
import { ReactComponent as NasCompanyImage } from '../../assets/images/thenascompany.svg';
import Burger from './burger';
import SlideMenu from './slide-menu';

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: #2c2c2c;
  display: flex;
  padding: 1rem 2rem 1rem 0.5rem;
  justify-content: space-between;

  @media (min-width: 768px){
    text-align: center;
    align-items: center
  }
`;

const NavAnchor = styled.a`
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: ${StylesSchema.LightGrey};
  padding-top: 5px;

  &:hover, &:focus {
    color: ${StylesSchema.Yellow};
  }
`;

const NavAnchorHighlight = styled.a`
  color: ${StylesSchema.Black};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  background:  ${StylesSchema.Yellow};
  padding: 5px 10px 5px 10px;
  border-radius: 3px;

  &:hover, &:focus {
    opacity: 0.9
  }
`;

const Navigation = styled.nav`
  display: none;

  @media (min-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 25%;
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
      // prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

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
        <a href="https://nasdaily.com" target="_blank"><NasCompanyLogo /></a>
      <Navigation>
        <NavAnchor onClick={() => smoothScroll('applyForFund')}>Apply for fund</NavAnchor>
        <NavAnchorHighlight onClick={() => smoothScroll('beASponsor')}>Be a sponsor</NavAnchorHighlight>
      </Navigation> 
      <Burger open={open} setOpen={setOpen} />
      <SlideMenu open={open} onNavigation={smoothScroll} />
    </HeaderWrapper>
  );
}

export default Header;
