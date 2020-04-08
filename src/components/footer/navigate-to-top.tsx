import React from 'react';
import styled from 'styled-components';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StylesSchema } from '../../shared/enums/styles';

const NavigateToTopWrapper = styled.div`
  -webkit-tap-highlight-color: transparent;
  position: fixed;
  bottom: 50px;
  cursor: pointer;
  right: 5%;
  background-color: rgba(0, 0, 0, 0.7);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  transition: all 0.3s ease;

  &:hover {
    background: #fbc91b;
    color: white;
  }
`;

const ChevronUpIcon = styled(FontAwesomeIcon)`
  && {
    color: ${StylesSchema.White};
    height: 35%;
    width: 35%;
  }
`;

const NavigateToTop: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <NavigateToTopWrapper onClick={handleClick}>
      <ChevronUpIcon icon={faChevronUp} />
    </NavigateToTopWrapper>
  );
};

export default NavigateToTop;
