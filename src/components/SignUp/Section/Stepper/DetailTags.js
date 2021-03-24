import React from 'react';
import styled from 'styled-components';
import { FormBox } from 'lib/form/styles';
import { ModalLabel, StyledTitle } from 'lib/typography/styles';

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 680px;
  min-width: 360px;
  padding-top: 8px;
  padding-bottom: 20px;
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const TechBox = styled.div`
  width: 128px;
  height: 56px;
  margin: 4px;
  background-color: #eaeaea;
  border-radius: 4px;
`

const DetailTags = () => {
  return (
    <TechContainer>
      <StyledTitle fontSize="30px">관심있는 분야를 선택해주세요</StyledTitle>
      <ModalLabel title="true">입력한 정보에 맞게 콘텐츠를 추천해드려요😊</ModalLabel>
      <FormBox paddingTop="24px">
        <Container>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
          <TechBox></TechBox>
        </Container>
      </FormBox>
    </TechContainer>
  )
}

export default DetailTags;
