import React from 'react';
import styled, { css }from 'styled-components';

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  ${(props => props.label && css`
    font-weight: 400;
    color: #6B788C;
  `)}
  ${(props => props.title && css`
    font-size: 15px;
    font-weight: 400;
    margin-top: 6px;
    color: #757575;
  `)}
`

function ModalLabel({children, title, label}) {
  return (
    <Label title={title} label={label}>
      {children}
    </Label>
  )
}

export default ModalLabel
