import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
  color: #DE506B;
  font-size: 13px;
  padding: 4px 0px 0px 4px;
  &:before {
    display: inline;
    content: "⚠ ";
  }
`

function ErrorMessage({children}) {
  return (
    <Message>
      {children}
    </Message>
  )
}

export default ErrorMessage
