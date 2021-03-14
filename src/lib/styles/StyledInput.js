import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: #6B788C;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  margin-top: 14px;
`
const InputBox = styled.div`
  position: relative;
  margin-top: 4px;
`
const Input = styled.input`
  width: 100%;
  height: 42px;
  padding-right: 20px;
  padding-left: 14px;
  border-radius: 4px;
  border: 1px solid #a9c5eb;
  background-color: #edf5ff;
  &::placeholder {
       color: #A2A5B7;
       font-size: 14px;
       line-height: 42px;
  }
  &:hover {
    border: 1px solid #2b80f2;
  }
  &:active {
    border: 2px solid #2b80f2;
  }
`
const StyledInput = React.forwardRef(({label,name,type,icon,value,placeholder},ref) => (
      <>
        <Label>{label}</Label>
        <InputBox>
          <Input 
            name={name} 
            type={type}
            value={value} 
            ref={ref}
            placeholder={placeholder}
          />
        </InputBox>
      </>
));

export default StyledInput;