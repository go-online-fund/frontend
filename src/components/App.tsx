import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './header/header';
import { StylesSchema } from '../shared/enums/styles';
import Landing from './pages/landing';
import Footer from "./footer/footer";

const AppWrapper = styled.div`
  background-color: ${StylesSchema.White};
  height: 100%;
`;

const App: React.FC = ()  => {
  return (
    <AppWrapper>
      <Header />
      <Landing />
      <Footer />
    </AppWrapper>
  );
}

export default App;
