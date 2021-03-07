import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  color: #505050;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: ${(props) => props.marginBottom || "14px"}
`

function ContentTitle({children, marginBottom}) {
    return (
        <Title marginBottom={marginBottom}>
            {children}
        </Title>
    )
}

export default ContentTitle;