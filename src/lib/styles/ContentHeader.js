import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px;
  margin-bottom: 28px;
  justify-content: space-between;
`

function ContentHeader({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ContentHeader;