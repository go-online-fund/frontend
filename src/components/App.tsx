import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { StylesSchema } from '../shared/enums/styles';
import './App.css';
import Footer from './footer/footer';
import Header from './header/header';
import Landing from './pages/landing';

const AppWrapper = styled.div`
  background-color: ${StylesSchema.White};
  height: 100%;
`;

const App: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize('UA-162979146-1');
  }, []);

  return (
    <AppWrapper>
      <Header />
      <Landing />
      <Footer />
    </AppWrapper>
  );
};

export default App;
