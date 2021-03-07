import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 127px;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(170, 170, 170, 0.16);
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: ${(props) => props.color || "#757575"};
`

const SocialLogin = ({onClick, children, backgroundColor, color}) => {
  return (
    <CustomButton onClick={onClick} backgroundColor={backgroundColor} color={color}>
      {children}
    </CustomButton>
  )
}

export default SocialLogin;
