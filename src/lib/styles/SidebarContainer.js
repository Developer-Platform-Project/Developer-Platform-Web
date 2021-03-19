import React from 'react';
import styled from 'styled-components';
import { media } from './style-utils';

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  padding-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  ${media.desktop`
      width: 990px;
  `}

  ${media.tablet`
      width: calc(100% - 2rem);
  `}

  ${media.mobile`
      width: calc(100% - 1rem);        
  `}
`

function SidebarContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default SidebarContainer;