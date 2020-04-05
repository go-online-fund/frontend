import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../shared/enums/styles';
import { ReactComponent as NasCompanyImage } from '../../assets/images/thenascompany.svg';
// import NasCompanyLogo from '../../assets/images/thenascompany.svg';

const HeaderWrapper = styled.header`
  background-color: ${StylesSchema.Black};
  display: flex;
  padding: 2rem 2rem;
  justify-content: space-between;
`;

const NavAnchor = styled.a`
  color: ${StylesSchema.LightGrey};
  text-decoration: none;

  &:hover, &:focus {
    color: ${StylesSchema.White};
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
`;


const NasCompanyLogo = styled(NasCompanyImage)`
  height: 20px;
  // margin-top: 30px;
  width: 150px;
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <NasCompanyLogo />
      <Navigation>
        <NavAnchor href='#home'>Home</NavAnchor>
        <NavAnchor href='#applyForFund'>Apply for Fund</NavAnchor>
        <NavAnchor href='#BeASponsor'>Be a Sponsor</NavAnchor>
      </Navigation> 
    </HeaderWrapper>
  );
}

export default Header;
