import React from 'react';
import styled from 'styled-components';

const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
  padding-left: 10px;
`

const AuthText = ({children}) => {
  return (
    <ButtonText>
      {children} 
    </ButtonText>
  )
}

export default AuthText
