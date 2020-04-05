import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.header`
  height: 100px;
  background: linear-gradient(to bottom, #B3B3B3 -200%, #2A2A2A 100%);
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
  padding-top: 20px;
  color: white;
  font-size: 16px;
  line-height: 2;
`;

const FooterDescription = styled.p`
    display: inline-block;
    margin-top: -10px
`;

const FooterLogo = styled.img`
     display: inline-block;
  height: 25px;
  margin-top: 20px
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterLogo src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586099620/thenascompany_crbo5u.svg"></FooterLogo>
            <br/>
            <span>Move Online Together Fund © 2020</span>
        </FooterWrapper>
    );
}

export default Footer;