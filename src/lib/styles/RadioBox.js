import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  height: 56px;
  margin: 20px 0px;
  margin-right: 20px;
  padding: 16px;
  border-radius: 6px;
  align-items: center;
  border: 1px solid #eaeaea;
  box-shadow: 0 3px 6px 0 rgba(170, 170, 170, 0.16);
  &:focus-within {
    border: 1.5px solid #2b80f2;
  }
`

function RadioBox({children}) {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default RadioBox
