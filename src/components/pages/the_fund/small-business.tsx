import React from 'react';
import styled from 'styled-components';

const SmallBusinessWrapper = styled.section`
  height: 600px;
  position: relative;
  width: 100%;
`;

const SmallBusinessBackgroundImgDiv = styled.div`
  background: url('https://res.cloudinary.com/dtemq7kdo/image/upload/v1587105055/small_business_nd6itm.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -100px -20px;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-clip-path: polygon(0 0, 100% 0%, 50% 100%, 0% 100%);
  clip-path: polygon(0 0, 50% 0%, 100% 100%, 0% 100%); 
  width: 70%;
  height: 100%;
  
   @media (max-width: 600px) {
    width: 100%;
    display: block;
    position: relative;
    clip-path: none; 
    height: 50%;
    background-position: initial;
    -webkit-clip-path: none;
  }
  
`;

const SmallBusinessDescription = styled.div`
  text-align: right;
  height: 100%;
  padding-right: 80px;
  vertical-align: middle;
  position: absolute;
  width: 70%; 
  right: 0;
  top: 0;
  background: #fbc91b;
  -webkit-clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%); 
  
    @media (max-width: 600px) {
    display: block;
    position: relative;
    clip-path: none; 
    width: 100%;
    height: 50%;
    padding-top: 0px;
    text-align: center;
    padding-right: 0px
  }
   
`;

const SmallBusinessTitle = styled.h1`
  align-self: center;
  color: #333;
  font-family: Montserrat, sans-serif;  
  font-size: 38px;
  padding-top: 200px;
  
  @media (max-width: 600px) {
    font-size: 28px;
    padding-top: 30px;
    vertical-align: middle;
    margin-top: 0px;
    padding-left: 35px;
    padding-right: 35px
  }
`;

const JoinButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-size: 18px;
  line-height: 40px;  
  font-family: Montserrat, sans-serif; 
  border: 1px transparent solid;
  
  @media (max-width: 600px) {
    font-size: 14px; 
     padding: 5px 10px;
  }
  
`;

const SmallBusiness: React.FC = () => (
  <SmallBusinessWrapper>
    <SmallBusinessBackgroundImgDiv />
    <SmallBusinessDescription>
      <SmallBusinessTitle>
        Are you a SME looking for support
        <br />
        to move your business online?
      </SmallBusinessTitle>
      <a href='/#applyForFund'>
        <JoinButton>
          APPLY
        </JoinButton>
      </a>
    </SmallBusinessDescription>
  </SmallBusinessWrapper>
);

export default SmallBusiness;
