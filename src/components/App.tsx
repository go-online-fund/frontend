import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './header/header';
import CallToAction from './pages/landing/call-to-action';
import MoveOnline from './pages/landing/move-online';

const AppWrapper = styled.div`
  background-color: #2c2c2c;
  height: 100%;
`;
 
const App: React.FC = ()  => {
  return (
    <AppWrapper>
      <Header />
      <CallToAction />
      <MoveOnline />
    </AppWrapper>
  );
}

export default App;