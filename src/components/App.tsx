import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './header/header';
import CallToAction from './pages/landing/call-to-action';
import MoveOnline from './pages/landing/move-online';
import ApplyFundForm from './pages/landing/apply-fund-form';

const AppWrapper = styled.div`
  background-color: #fdfdfd;
  height: 100%;
`;
 
const App: React.FC = ()  => {
  return (
    <AppWrapper>
      <Header />
      <CallToAction />
      <MoveOnline />
      <ApplyFundForm />
    </AppWrapper>
  );
}

export default App;
