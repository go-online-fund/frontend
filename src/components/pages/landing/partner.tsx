import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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


const PartnerWrapper = styled.header`
  height: 100%;
  background: linear-gradient(to bottom, #B3B3B3 -200%, #2A2A2A 100%);
  margin: 0 auto;
  text-align: center;
  padding-top: 120px;
  align-items: center;
  padding-bottom: 80px
`;

const PartnerHeader = styled.h1`
  font-size: 2em;
  text-transform: uppercase;
  line-height: 1.5;
  padding-top: 80px;
  padding-bottom: 40px;
  font-weight: bold;
  color: #fbc91b
`;

const PartnerIcon = styled.img`
  width: 200px
`;

const PartnerSupport = styled.div`
  color: #fbc91b;
  font-size: 3em
`;

const SecondaryButton = styled.div`
  background: #fbc91b;
  color: black;
  padding: 10px 10px 10px 10px;
  font-size: 16px;
  border: 1px transparent solid;
  border-radius: 20px;
  text-align: center;
  margin: 0 auto;
  width: 200px;
  font-weight: bold;
  margin-top: 40px
`;


const Partner: React.FC = () => {
    return (
        <PartnerWrapper>
            <PartnerHeader>Proudly Supported By</PartnerHeader>
            <Carousel responsive={responsive}>
                <PartnerIcon src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586147116/logo/facebook_pckthg.svg"></PartnerIcon>
                <PartnerIcon src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586147117/logo/lark_ywj9oi.png"></PartnerIcon>
                <PartnerIcon src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586147116/logo/nice_z9impn.svg"></PartnerIcon>
                <PartnerIcon src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586147116/logo/nice_z9impn.svg"></PartnerIcon>
            </Carousel>
            <PartnerHeader>Thanks to your support</PartnerHeader>
            <Carousel responsive={responsiveSupport}>
                <PartnerSupport>
                    $1,000,000 <br/><span style={{color: 'white', fontSize: '20px'}}>raised</span>
                </PartnerSupport>
                <PartnerSupport>
                    10 <br/><span style={{color: 'white', fontSize: '20px'}}>SMEs supported</span>
                </PartnerSupport>
            </Carousel>
            <a href="#beASponsor"><SecondaryButton>
                JOIN THE MOVEMENT
            </SecondaryButton></a>
        </PartnerWrapper>
    );
}

export default Partner;