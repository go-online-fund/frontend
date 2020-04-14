import React, { useState } from 'react';
import CountUp from 'react-countup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import partnersList from './partners.json';
import { StylesSchema } from '../../../shared/enums/styles';
import { RoundedSecondaryButton } from '../../elements';

const responsiveSupport = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PartnerWrapper = styled.div`
  height: 100%;
  background: ${StylesSchema.DarkGrey};
  margin: 0 auto;
  text-align: center;
  padding-top: 120px;
  align-items: center;
  padding-bottom: 80px;
`;

const PartnerHeader = styled.h1`
  color: ${StylesSchema.Yellow};
  font-size: 2em;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.5;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (min-width: 415px) {
    padding-top: 80px;
  }

  @media (min-width: 2000px) {
    padding-top: 200px;
  }
`;

const PartnerIcon = styled.img`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: transform 0.5s ease;
  padding: 1em;
  width: 130px;
  max-width: 100%;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    padding: 1.4rem;
    width: 150px;
  }

  @media (min-width: 1366px) {
    width: 180px;
  }
`;

const PartnerIconContainer = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
`;


const PartnerSupport = styled.div`
  color: ${StylesSchema.Yellow};
  display: flex;
  flex-direction: column;
  font-size: 3em;
  font-weight: bold;

  > div {
    margin-bottom: 1.8rem;
  }

  > span {
    color: ${StylesSchema.White};
    font-size: 1.2rem;
  }

  span {
    font-weight: bold;
  }
`;

const PartnersGrid = styled.div`
  background-color: rgb(254, 238, 188);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2.4rem;
  }
`;


// only import polyfill if scrollBehavior is not supported by browser
if (!('scrollBehavior' in document.documentElement.style)) {
  import('smoothscroll-polyfill').then((smoothscroll) => {
    smoothscroll.polyfill();
  });
}

const Partner: React.FC = () => {
  const [open, setOpen] = useState(false);
  const smoothScroll = (target: string) => {
    if (open) {
      setOpen(false);
    }
    const targetElement = document.getElementById(target)?.offsetTop;
    window.scrollTo({
      top: targetElement,
      behavior: 'smooth',
    });
  };

  return (
    <PartnerWrapper>
      <PartnerHeader>Proudly Supported By</PartnerHeader>
      <PartnersGrid>
        {
          partnersList.map(({ companyName, companyLogo }) => (
            <PartnerIconContainer key={`${companyName.replace(/\s+/g, '')}`}>
              <PartnerIcon
                alt={companyName}
                title={companyName}
                src={companyLogo}
              />
            </PartnerIconContainer>
          ))
        }
      </PartnersGrid>
      <PartnerHeader>Thanks to your support</PartnerHeader>
      <Carousel
        responsive={responsiveSupport}
        containerClass='carousel-partner-support-container'
      >
        <PartnerSupport>
          <div>
            SGD
            {' '}
            <CountUp
              formattingFn={(e) => e.toLocaleString('en-US')}
              start={100}
              end={70000}
            />
          </div>
          <span>amount of resources raised</span>
        </PartnerSupport>
        <PartnerSupport>
          <div>
            <CountUp
              formattingFn={(e) => e.toLocaleString('en-US')}
              start={0}
              end={3}
            />
          </div>
          {' '}
          <span>SME supported</span>
        </PartnerSupport>
      </Carousel>
      <RoundedSecondaryButton
        onClick={() => smoothScroll('beASponsor')}
      >
        SUPPORT THE FUND
      </RoundedSecondaryButton>
    </PartnerWrapper>
  );
};

export default Partner;
