import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 408px;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  background-color: #2b80f2;
  border-radius: 4px;
  margin-top: ${(props) => props.marginTop || "30px"};
`

function StyledButton({value, marginTop}) {
  return (
    <Button marginTop={marginTop}>
      {value}
    </Button>
  )
}

export default StyledButton;
