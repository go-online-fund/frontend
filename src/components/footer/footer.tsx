import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';

const FooterWrapper = styled.footer`
  background: ${StylesSchema.DarkGrey};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 40px 0 30px;
  color: white;
  font-size: 16px;
  height: 160px;

  > span {
    font-size: 1rem;

    &:last-of-type {
      font-size: 0.8rem;
    }
  }
`;

const FooterLogo = styled.img`
  height: 25px;
  width: 200px;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterLogo
      alt='Nas Company Logo'
      src='https://res.cloudinary.com/doaxab4ly/image/upload/v1586099620/thenascompany_crbo5u.svg'
    />
    <span>All Rights Reserved © 2020</span>
    <span>10 Central Exchange Green, Singapore 138649</span>
  </FooterWrapper>
);

export default Footer;
