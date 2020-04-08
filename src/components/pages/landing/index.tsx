import React from 'react';
import ApplyFundForm from './apply-fund-form';
import CallToAction from './call-to-action';
import MoveOnline from './move-online';
import Partner from './partner';
import SponsorsForm from './sponsors-form';
import WhoWeSupport from './who-need-help';

const Landing: React.FC = () => (
  <>
    <CallToAction />
    <Partner />
    <SponsorsForm />
    <MoveOnline />
    <WhoWeSupport />
    <ApplyFundForm />
  </>
);

export default Landing;
