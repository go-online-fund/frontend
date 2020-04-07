import React from 'react';
import styled from 'styled-components';

const GlobalBusiness = styled.div`
  height: 100%;
  background: #fbc91b;
  display: flex;
  flex-direction: column;
   
  @media (min-width: 768px) {
    flex-direction: row;
    padding-left: 250px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  
  @media (max-width: 415px) {
    background: white
  }
  
`;

const GlobalBusinessDiv = styled.div` 

  @media (min-width: 768px) {
      flex-basis: 42%;
      font-weight: 700;
   }
      
   flex-basis: 100%
`;

const GlobalBusinessDescription = styled.div`
  padding-right: 40px;
  padding-left: 40px;
  font-size: 16px;
  font-weight: bold !important;
  line-height: 2;
  text-align: center;
  background: #2c2c2c;
  color: white;
  vertical-align: center;
  
  @media (min-width: 768px) {
    font-size: 20px;
    padding-top: 8%;
  } 
`;

const GlobalBusinessDescDiv = styled.div`
  background: #2c2c2c;
  flex-basis: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  
  @media (min-width: 768px) {
    flex-basis: 42%;
  }   
`;

const GlobalBusinessMapImg = styled.img`
  width: 100%;
  height: 100%;
  
  @media (max-width: 415px) {
    border-top: 3px solid #fbc91b;
  }  
`;

const GlobalBusinessHighlight = styled.span`
  color: #fbc91b;
  font-size: 18px;
  font-weight: bold;
  
  @media (min-width: 768px) {
    font-size: 26px
    }
`;

const Global: React.FC = () => {
    return (
        <GlobalBusiness style={{fontWeight: 'bold'}}>
            <GlobalBusinessDiv>
                <GlobalBusinessMapImg
                    src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586181112/logo/world_map_nas_company_zukask.jpg"/>
            </GlobalBusinessDiv>
            <GlobalBusinessDescDiv>
                <GlobalBusinessDescription><p>After growing a global brand that connects with millions of people, we
                    know <GlobalBusinessHighlight>online business works</GlobalBusinessHighlight>. That's why we believe
                    in helping offline businesses move online, <br/><GlobalBusinessHighlight>right
                        now</GlobalBusinessHighlight>!</p>
                </GlobalBusinessDescription>
            </GlobalBusinessDescDiv>
        </GlobalBusiness>
    );
}

export default Global;