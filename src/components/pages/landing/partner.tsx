import React, {useState} from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CountUp from 'react-countup';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    },
};

const responsiveSupport = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 2,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 2,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    },
};


const PartnerWrapper = styled.header`
  height: 100%;
  background: #2c2c2c;
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
  color: #fbc91b;
  
  @media (max-width: 415px) {
    padding-top: 40px;
  }
  
   @media (min-width: 2000px) {
    padding-top: 80px;
  }
  
`;

const PartnerIcon = styled.img`
  width: 200px;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transform-duration: 500
    
  }
`;

const PartnerSupport = styled.div`
  color: #fbc91b;
  font-size: 3em;
  font-weight: bold !important;
  
   span {
    font-weight: bold !important
  }
`;

const PartnerText = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: white
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
  margin-top: 40px;
  font-weight: bold;
  
  &:hover {
    cursor: pointer
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
            behavior: 'smooth'
        });
    };

    return (
        <PartnerWrapper>
            <PartnerHeader>Proudly Supported By</PartnerHeader>
            <Carousel responsive={responsive} infinite>
                <PartnerIcon
                    src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586238419/nasdaily_logo_znoqua.svg"></PartnerIcon>
                <PartnerText>Add <br/> your company</PartnerText>
                <PartnerText>Add <br/>your company</PartnerText>
                <PartnerText>Add <br/>your company</PartnerText>
                <PartnerText>Add <br/>your company</PartnerText>
            </Carousel>
            <PartnerHeader>Thanks to your support</PartnerHeader>
            <Carousel responsive={responsiveSupport}>
                <PartnerSupport>
                   SGD <CountUp
                    formattingFn={(e) => e.toLocaleString('en-US')} start={100}
                    end={10000}
                /> <br/><span style={{color: 'white', fontSize: '20px'}}>raised</span>
                </PartnerSupport>
                <PartnerSupport>
                    <CountUp
                        formattingFn={(e) => e.toLocaleString('en-US')} start={0}
                        end={1}/> <br/><span style={{color: 'white', fontSize: '20px'}}>SME supported</span>
                </PartnerSupport>
            </Carousel>
            <SecondaryButton onClick={() => smoothScroll('beASponsor')}>
                SUPPORT THE FUND
            </SecondaryButton>
        </PartnerWrapper>
    );
}

export default Partner;