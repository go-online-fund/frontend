import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';

const FooterWrapper = styled.header`
  height: 100%;
  background-image: ${StylesSchema.BlackGradient};
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  color: white;
  font-size: 16px;
  line-height: 2;
  border-top: 2px solid #fbc91b
`;


const FooterLogo = styled.img`
  display: inline-block;
  height: 25px;
  margin-top: 20px
`;

const Footer: React.FC = () => {
return (
  <FooterWrapper>
    <FooterLogo src='https://res.cloudinary.com/doaxab4ly/image/upload/v1586099620/thenascompany_crbo5u.svg' />
    <br/>
    <span>M<span className='icon-heart'>
    </span>ve Online Together Fund © 2020</span>
    <br/>
    <span style={{fontSize: '12px'}}>10 Central Exchange Green, Singapore 138649</span>
  </FooterWrapper>
);
}

export default Footer;