import React, { useState } from 'react';
import CountUp from 'react-countup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import partnersList from './partners.json';
import { StylesSchema } from '../../../shared/enums/styles';
import { RoundedSecondaryButton } from '../../elements/buttons';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
  padding-bottom: 80px
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
  cursor: pointer;
  transition: transform 0.5s ease;
  width: 200px;

  &:hover {
    transform: scale(1.1);
  }
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

const PartnerText = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white
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
      <Carousel
        responsive={responsive}
        infinite
        itemClass='sponsor-icon'
      >
        {
          partnersList.map(({ companyName, companyLogo }) => (
            <PartnerIcon
              alt={companyName}
              src={companyLogo}
              key={`${companyName.replace(/\s+/g, '')}`}
            />
          ))
        }
        <PartnerText>
          Add
          {' '}
          <br />
          your company
        </PartnerText>
        <PartnerText>
          Add
          {' '}
          <br />
          your company
        </PartnerText>
        <PartnerText>
          Add
          {' '}
          <br />
          your company
        </PartnerText>
      </Carousel>
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
              end={20000}
            />
          </div>
          <span>raised</span>
        </PartnerSupport>
        <PartnerSupport>
          <div>
            <CountUp
              formattingFn={(e) => e.toLocaleString('en-US')}
              start={0}
              end={1}
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
