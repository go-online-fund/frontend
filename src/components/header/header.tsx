import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';
import { ReactComponent as NasCompanyImage } from '../../assets/images/thenascompany.svg';

const HeaderWrapper = styled.header`
  background-color: ${StylesSchema.Black};
  display: flex;
  padding: 2rem 2rem;
  justify-content: space-between;
`;

const NavAnchor = styled.a`
  color: ${StylesSchema.LightGrey};
  cursor: pointer;
  text-decoration: none;

  &:hover, &:focus {
    color: ${StylesSchema.White};
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
`;

const NasCompanyLogo = styled(NasCompanyImage)`
  height: 20px;
  // margin-top: 30px;
  width: 150px;
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
        <NavAnchor onClick={() => smoothScroll('home')}>Home</NavAnchor>
        <NavAnchor onClick={() => smoothScroll('applyForFund')}>Apply for Fund</NavAnchor>
        <NavAnchor onClick={() => smoothScroll('beASponsor')}>Be a Sponsor</NavAnchor>
      </Navigation> 
    </HeaderWrapper>
  );
}

export default Header;
