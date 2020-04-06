import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 100%;
  background: #2c2c2c;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  color: white;
  font-size: 16px;
  line-height: 2;
`;

const FooterLogo = styled.img`
     display: inline-block;
  height: 25px;
  width: 200px;
  margin-top: 20px
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterLogo
                src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586099620/thenascompany_crbo5u.svg"></FooterLogo>
            <br/>
            <span>All Rights Reserved © 2020</span>
            <br/>
            <span style={{fontSize: '12px'}}>10 Central Exchange Green, Singapore 138649</span>
            <a id="return-to-top"><i className="fa fa-chevron-up icon-chevron-up"/></a>
        </FooterWrapper>
    );
}

export default Footer;