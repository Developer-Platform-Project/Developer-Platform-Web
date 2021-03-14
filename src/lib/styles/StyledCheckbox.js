import React from 'react';
import styled from 'styled-components';
import checked from '../../assets/images/checked.png';

const CheckBox = styled.div`
  display: flex;
  margin-top: 16px;
`
const CheckTitle = styled.span`
  color: #A2A5B7;
  font-size: 14px;
  line-height: 14px;
  margin-right: 5px;
  vertical-align: middle;
`
const Img = styled.img`
  width: 14px;
  border-radius: 2px;
  vertical-align: middle;
`
const BeforeCheck = styled.div`
  width: 14px;
  height: 14px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 2px;
  vertical-align: middle;
`

function StyledCheckbox({onClick,value, check}) {
  return (
    <CheckBox onClick={onClick}>
      <CheckTitle>{value}</CheckTitle>
      {check ? 
        <Img src={checked} alt="checked"/>
        : <BeforeCheck></BeforeCheck>
      }
    </CheckBox>
  )
}

export default StyledCheckbox;
