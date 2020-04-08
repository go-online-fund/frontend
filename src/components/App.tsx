import React, { useCallback, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { StylesSchema } from '../shared/enums/styles';
import './App.css';
import Footer from './footer/footer';
import NavigateToTop from './footer/navigate-to-top';
import Header from './header/header';
import Landing from './pages/landing';

const AppWrapper = styled.div`
  background-color: ${StylesSchema.White};
  height: 100%;
`;

const App: React.FC = () => {
  const [showNavigateTop, setShowNavigateTop] = useState(false);

  const onScroll = useCallback(() => {
    if (showNavigateTop) {
      if (window.scrollY < 50) {
        setShowNavigateTop(false);
      }
    } else if (!showNavigateTop) {
      if (window.scrollY >= 50) {
        setShowNavigateTop(true);
      }
    }
  }, [showNavigateTop]);

  useEffect(() => {
    ReactGA.initialize('UA-162979146-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.addEventListener('scroll', () => onScroll());

    return () => {
      window.removeEventListener('keydown', onScroll);
    };
  }, [onScroll]);

  return (
    <AppWrapper>
      <Header />
      <Landing />
      <CSSTransition
        unmountOnExit
        in={showNavigateTop}
        timeout={100}
        classNames='navigate-top'
      >
        <NavigateToTop />
      </CSSTransition>
      <Footer />
    </AppWrapper>
  );
};

export default App;
