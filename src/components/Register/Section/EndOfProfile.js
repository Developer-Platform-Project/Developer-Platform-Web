import React from 'react';
import styled from 'styled-components';
import ModalLabel from '../../../lib/styles/ModalLabel';
import StyledTitle from '../../../lib/styles/StyledTitle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 480px;
  height: 320px;
`
const Label = styled.p`
  font-size: 14px;
  color: #757575;
  margin-bottom: 2px;
`

const EndOfProfile = () => {
  return (
    <Container>
      <Label>모든 정보를 입력했어요!</Label>
      <StyledTitle fontSize="28px">
        데브이데아 시작하기
      </StyledTitle>
    </Container>
  )
}

export default EndOfProfile
