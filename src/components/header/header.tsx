import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';
import { ReactComponent as NasCompanyImage } from '../../assets/images/thenascompany.svg';

const HeaderWrapper = styled.header`
  background-image: linear-gradient(to bottom, #B3B3B3 -200%, #2A2A2A 100%);
  display: flex;
  padding: 1rem 2rem 1rem 0.5rem;
  justify-content: space-between;
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

const Navigation = styled.div`
  display: none;

  @media (min-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
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
  const smoothScroll = (target: string) => {
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
        <NavAnchor onClick={() => smoothScroll('home')}>HOME</NavAnchor>
        <NavAnchor onClick={() => smoothScroll('applyForFund')}>APPLY FOR FUND</NavAnchor>
        <NavAnchor onClick={() => smoothScroll('beASponsor')}>BE A SPONSOR</NavAnchor>
      </Navigation> 
    </HeaderWrapper>
  );
}

export default Header;
