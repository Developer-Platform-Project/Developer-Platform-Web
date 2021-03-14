import React from 'react';
import styled, {css} from 'styled-components';
import gear from '../../assets/images/gear.png';

const Label = styled.label`
  color: #6B788C;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  text-align: left;
  margin-top: 16px;
`
const InputBox = styled.div`
  position: relative;
  margin-top: 5px;
`
const Input = styled.input`
  width: 100%;
  height: 42px;
  padding-right: 20px;
  padding-left: 14px;
  border-radius: 4px;
  border: 1px solid #D8E0EB;
  background-color: #fafbfc;
  &::placeholder {
       color: #aaa;
       font-size: 14px;
       line-height: 42px;
  }
  &:hover {
    border: 1px solid #2b80f2;
  }
  &:active {
    border: 2px solid #2b80f2;
  }
  ${(props => props.readOnly && css`
    border: 1px solid #eaeaea;
    background-color: #fafafa;
    &:hover {
      border: 1px solid #ccc;
    }
    &:active {
      border: 2px solid #ccc;
    }
  `)}
`
const Icon = styled.img`
  position: absolute;  
  width: 13px;
  top: 14px;
  right: 16px;
`

const AccountInput = React.forwardRef(({label,name,type,icon,value,placeholder,readOnly,onClick},ref) => (
      <>
        <Label>{label}</Label>
        <InputBox>
          <Input 
            name={name} 
            type={type}
            value={value} 
            ref={ref}
            placeholder={placeholder} 
            readOnly={readOnly}
            onClick={onClick}
          />
          { icon &&
            <Icon src={gear} alt="gear" />
          }
        </InputBox>
      </>
));

export default AccountInput;