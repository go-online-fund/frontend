import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import ApplyFundForm from './apply-fund-form';
import CallToAction from './call-to-action';
import MoveOnline from './move-online';
import Partner from './partner';
import SponsorsForm from './sponsors-form';
import WhoWeSupport from './who-need-help';
import { RouterState } from '../../../shared/interfaces/router.interface';

const Landing: React.FC = () => {
  const { location: { state, pathname } } = useHistory<RouterState>();

  useEffect(() => {
    if (!state) {
      return;
    }
    const { scrollTo } = state;
    if (!scrollTo) {
      return;
    }
    const targetElement = document.getElementById(scrollTo)?.offsetTop;
    window.scrollTo({
      top: targetElement,
    });
  }, [pathname, state]);

  return (
    <>
      <CallToAction />
      <Partner />
      <SponsorsForm />
      <MoveOnline />
      <WhoWeSupport />
      <ApplyFundForm />
    </>
  );
};

export default Landing;
