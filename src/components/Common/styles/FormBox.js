import React from 'react';
import styled from 'styled-components';

const Box = styled.form`
  display: flex;
  flex-direction: column;
`

function FormBox({onSubmit,children}) {
    return (
      <Box onSubmit={onSubmit}>
        {children}
      </Box>
    )
}

export default FormBox;