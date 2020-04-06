import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    text-align: center;
    width: 100%;
    padding-bottom: 100px;
`;

const LoadingDot = styled.div`
      animation: dot-keyframes 1.5s infinite ease-in-out;
      background-color: #298AE9;
      border-radius: 10px;
      display: inline-block;
      height: 20px;
      width: 20px;
      margin-right: 10px;

      &:nth-child(2) {
        animation-delay: .5s;
      }

      &:nth-child(3) {
        animation-delay: 1s;
      }
`;


const Loading: React.FC = () => {
    return (
        <LoadingWrapper>
            <LoadingDot/>
            <LoadingDot/>
            <LoadingDot/>
        </LoadingWrapper>
    );
}

export default Loading;