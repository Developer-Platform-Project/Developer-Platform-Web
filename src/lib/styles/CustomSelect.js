import React from "react";
import styled, { css } from "styled-components";
import Select from "react-select";

const StyledLabel= styled.p`
  color: #757575;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  margin-top: 14px;
`
const StyledSelect = styled(Select)`
  .Select__control {
    width: 100%;
    height: 42px;
    font-size: 14px;
    margin-top: 4px;
    border: 1px solid #a9c5eb;
    background-color: #edf5ff;
    border-radius: 4px;
    cursor: pointer;
    ${(props => props.account && css`
      border: 1px solid #CDDDF4;
      background-color: #F2F6FD;
    `)}
  }
  .Select__placeholder {
    font-size: 14px;
    color: #aaa;
    padding-left: 2px;
  }
  .Select__control:hover {
    border-color: #2b80f2;
  }
  .Select__control--is-focused {
    box-shadow: 0 0 0 1px #2b80f2;
    outline: none;
    color: #2b80f2
  }
  .Select__indicator-separator {
    display: none;
  }
  .Select__menu {
    font-size: 14px;
    color: #757575;
  }
  .css-tj5bde-Svg{
    color: #a9c5eb;
  }
  .css-tj5bde-Svg:hover{
    color: #2b80f2;
  }
`;

const CustomSelect = React.forwardRef(({options, value, defaultValue, placeholder, onChange, account},inputRef) => (
  <>
    <StyledLabel>성별</StyledLabel>
    <StyledSelect
      isClearable
      classNamePrefix="Select"
      placeholder={placeholder}
      value={value}
      options={options}
      onChange={onChange}
      defaultValue={defaultValue}
      account={account}
    />
  </>
));

export default CustomSelect;