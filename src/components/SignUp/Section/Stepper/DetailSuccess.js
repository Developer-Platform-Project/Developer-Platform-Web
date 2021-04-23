import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logoImage.png';
import { StyledTitle } from 'styles/typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 280px;
`;
const Label = styled.p`
  font-size: 14px;
  color: #757575;
  margin-bottom: 2px;
`;
const Img = styled.img`
  width: 32px;
  margin-right: 6px;
`;

const DetailSuccess = () => {
  return (
    <Container>
      <Label>모든 정보를 입력했어요!</Label>
      <StyledTitle fontSize="28px">
        <Img src={logo} alt="logo" />
        데브이데아 시작하기
      </StyledTitle>
    </Container>
  );
};

export default DetailSuccess;
