import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.div`
  font-size: 16px;
  color: #354053;
  font-weight: 600;
  margin-top: 28px;
`
const SubDescription = styled.div`
  font-size: 14px;
  color: #616874;
  margin-top: 8px;
  margin-bottom: 12px;
`

function SettingTitle({title, description}) {
  return (
    <>
      <SubTitle>{title}</SubTitle>
      <SubDescription>{description}</SubDescription>
    </>
  )
}

export default SettingTitle
