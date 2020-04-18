import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';

const OurValueWrapper = styled.section`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 80px;
  background: ${StylesSchema.White};
`;

const OurValueDiv = styled.section`
  text-align: center;
  display: flex;
  flex-direction: row;
  
  @media (max-width: 600px) {
    display: block;
  }
`;

const OurValueCol = styled.div`
  flex-basis: 50%;
  text-align: center;
  margin: 0 auto;
  
  @media (max-width: 415px) {
    flex-basis: 100%;
  }
`;

const OurValueImg = styled.img`
  height: 170px;
  width: 170px
`;

const OurValueDesc = styled.p`
   font-size: 22px;
   font-weight: bold;
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
  margin-top: 10px
`;

const OurValue: React.FC = () => (
  <OurValueWrapper>
    <OurValueDiv>
      <OurValueCol>
        <OurValueImg
          src='https://res.cloudinary.com/dtemq7kdo/image/upload/v1587101357/funds_icon_fq5mb0.svg?webp'
        />
        <OurValueDesc>
          100% of the fund
          <br />
          goes to helping the SMEs
        </OurValueDesc>
      </OurValueCol>
      <OurValueCol>
        <OurValueImg
          src='https://res.cloudinary.com/dtemq7kdo/image/upload/v1587104607/sg_united_icon_vjlpos.svg'
        />
        <OurValueDesc>
          We can go through
          <br />
          this pandemic together
        </OurValueDesc>
      </OurValueCol>
    </OurValueDiv>
  </OurValueWrapper>
);

export default OurValue;
