import React from 'react';
import styled from 'styled-components';
import { media } from './style-utils';

const Box = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 406px !important;
  padding-bottom: ${(props) => props.paddingBottom};
  padding-top: ${(props) => props.paddingTop};
  ${media.mobile`
      margin-top: 1rem;
      min-width: 340px !important;
  `}
`

function FormBox({onSubmit,children,width,paddingTop, paddingBottom}) {
    return (
      <Box onSubmit={onSubmit} paddingTop={paddingTop} paddingBottom={paddingBottom}>
        {children}
      </Box>
    )
}

export default FormBox;