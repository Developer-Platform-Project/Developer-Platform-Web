import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`

function FlexContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default FlexContainer;