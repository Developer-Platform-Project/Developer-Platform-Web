import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  padding-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
`

function SidebarContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default SidebarContainer;