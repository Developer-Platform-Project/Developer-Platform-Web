import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: #36507E;
`

function ContentTitle({children}) {
    return (
        <Title>
            {children}
        </Title>
    )
}

export default ContentTitle;