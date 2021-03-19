import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  padding-top: 8px;
  padding-bottom: 20px;
`

function ModalContainer({children, width}) {
  return (
    <Container width={width}>
      {children}
    </Container>
  )
}

export default ModalContainer
