import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  width: 20px;
  height: 20px;
`

const AuthIcon = ({src, alt}) => {
  return (
    <Icon src={src} alt={alt}/>
  )
}

export default AuthIcon;
