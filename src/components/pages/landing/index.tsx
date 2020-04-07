import React from 'react';
import CallToAction from './call-to-action';
import MoveOnline from './move-online';
import ApplyFundForm from './apply-fund-form';
import SponsorsForm from './sponsors-form';
import Partner from './partner';
import WhoWeSupport from './who-need-help';

const Landing: React.FC = ()  => (
  <>
    <CallToAction/>
    <Partner/>
    <SponsorsForm/>
    <MoveOnline/>
    <WhoWeSupport/>
    <ApplyFundForm/>
  </>
);

export default Landing;
