import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  color: ${(props) => props.color || "#2b80f2"}
`

const LinkText = ({children, color, fontSize, fontWeight}) => {
  return (
    <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Text>
  )
}

export default LinkText;
