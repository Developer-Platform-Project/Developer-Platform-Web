import React from 'react';
import styled from 'styled-components';
import { media } from './style-utils';

const Container = styled.div`
  width: ${(props) => props.width};
  padding-top: 8px;
  padding-bottom: 20px;
  ${media.desktop`
      width: ${(props) => props.width};
  `}

  ${media.tablet`
      width: calc(${(props) => props.width} - 2rem);
  `}

  ${media.mobile`
      width: calc(${(props) => props.width} - 10rem);        
  `}
`

function ModalContainer({children, width}) {
  return (
    <Container width={width}>
      {children}
    </Container>
  )
}

export default ModalContainer
