import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: #757575;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  margin-top: 14px;
`
const Input = styled.input`
  width: 408px;
  height: 42px;
  margin-top: 4px;
  padding-left: 14px;
  border-radius: 4px;
  border: 1px solid #a9c5eb;
  background-color: #edf5ff;
  &::placeholder {
       color: #aaa;
       font-size: 14px;
       line-height: 42px;
  }
`

const StyledInput = React.forwardRef(({label,name,type,placeholder},ref) => (
      <>
        <Label>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder} ref={ref}/>
      </>
));

export default StyledInput;