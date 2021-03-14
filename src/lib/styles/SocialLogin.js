import React from 'react';
import styled from 'styled-components';
import { media } from './style-utils';

const CustomButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(170, 170, 170, 0.16);
  cursor: pointer;
  min-width: 127px !important;
  ${media.mobile`
      margin-top: 1rem;
      min-width: 110px !important;
  `}
  color: ${(props) => props.color || "#757575"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
`

const SocialLogin = ({onClick, children, backgroundColor, color}) => {
  return (
    <CustomButton onClick={onClick} backgroundColor={backgroundColor} color={color}>
      {children}
    </CustomButton>
  )
}

export default SocialLogin;
