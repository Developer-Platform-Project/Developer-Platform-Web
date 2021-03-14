import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0px 14px;
  font-weight: 400;
  color: #fff;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor || '#2b80f2'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '48px'};
  font-size: ${(props) => props.fontSize || '16px'};
  margin-top: ${(props) => props.marginTop || "30px"};
`

function StyledButton({value, width, height, fontSize, marginTop, backgroundColor}) {
  return (
    <Button 
      width={width} 
      height={height}
      fontSize={fontSize} 
      marginTop={marginTop}
      backgroundColor={backgroundColor}
    >
      {value}
    </Button>
  )
}

export default StyledButton;
