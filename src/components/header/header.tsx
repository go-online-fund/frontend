import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { StylesSchema } from '../../shared/enums/styles';
import { ReactComponent as NasCompanyImage } from '../../assets/images/thenascompany.svg';
import Burger from './burger';
import SlideMenu from './slide-menu';
import { RouterState } from '../../shared/interfaces/router.interface';

const HeaderWrapper = styled.header`
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: ${StylesSchema.DarkGrey};
  display: flex;
  padding: 1rem 1rem 1rem 0.5rem;
  justify-content: space-between;

  @media (min-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const NavAnchor = styled.a`
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: ${StylesSchema.LightGrey};
  padding-top: 5px;

  &:hover,
  &:focus {
    color: ${StylesSchema.Yellow};
  }

  :first-child {
    margin-left: 0;
  }
`;

// const NavAnchorHighlight = styled.a`
//   background: ${StylesSchema.Yellow};
//   border-radius: 3px;
//   color: ${StylesSchema.Black};
//   font-size: 1rem;
//   cursor: pointer;
//   text-decoration: none;
//   padding: 5px 10px 5px 10px;

//   &:hover,
//   &:focus {
//     opacity: 0.9;
//   }

//   &:last-child {
//     margin-right: 0;
//   }
// `;

const Navigation = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 5px;

    > * {
      margin: 0 1rem;
    }
  }

  @media (min-width: 1024px) {
    > * {
      margin: 0 1.5rem;
    }
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
  const history = useHistory();

  useEffect(() => {
    if (open) {
      // prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const navigateTo = (route: string, state?: RouterState) => {
    if (open) {
      setOpen(false);
    }
    history.push(route, state);
  };

  return (
    <HeaderWrapper>
      <Link
        to='/'
        aria-label='Nas Company Logo'
      >
        <NasCompanyLogo />

      </Link>
      <Navigation>
        <NavAnchor
          onClick={() => navigateTo('/success-stories')}
        >
          Success Stories
        </NavAnchor>
        <NavAnchor
          onClick={() => navigateTo('/how-the-fund-works')}
        >
          How the fund works
        </NavAnchor>
      </Navigation>
      <Burger open={open} setOpen={setOpen} />
      <SlideMenu open={open} onNavigation={navigateTo} />
    </HeaderWrapper>
  );
};

export default Header;
