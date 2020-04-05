import React from 'react';
import CallToAction from './call-to-action';
import MoveOnline from './move-online';
import ApplyFundForm from './apply-fund-form';
import SponsorsForm from './sponsors-form';

const Landing: React.FC = ()  => (
  <>
    <CallToAction />
    <MoveOnline />
    <ApplyFundForm />
    <SponsorsForm />
  </>
);

export default Landing;
