import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 40px;
  font-size: 14px;
  text-align: center;
  color: #999;
`
const Span = styled.span`
  padding-right: 20px;
`

function TextContainer({children, span}) {
  return (
    <Container>
      <Span>{span}</Span>
      {children}
    </Container>
  )
}

export default TextContainer
