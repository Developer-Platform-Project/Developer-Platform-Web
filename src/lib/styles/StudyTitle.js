import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  color: #353535;
  font-size: 18px;
  font-weight: 500;
`
const SubTitle = styled.p`
  color: #757575;
  font-size: 15px;
  margin-top: 6px;
`

const StudyTitle = ({title, subtitle}) => {
  return (
    <div>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </div>
  )
}

export default StudyTitle
