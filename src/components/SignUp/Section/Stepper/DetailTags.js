import React from 'react';
import styled from 'styled-components';
import { FormBox } from 'styles/form/styles';
import { ModalLabel, StyledTitle } from 'styles/typography';
import { media } from 'styles/style-utils';

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 680px;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 20px;
`;
const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
  ${media.desktop`
      grid-template-columns: repeat(3,1fr);
      grid-template-rows: repeat(3,1fr);
    `}
  ${media.tablet`
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(2,1fr);
    `}
    ${media.mobile`
      grid-template-columns: repeat(1,1fr);
      grid-template-rows: repeat(1,1fr);
    `}
`;
const TechBox = styled.div`
  width: 128px;
  height: 56px;
  margin: 4px;
  background-color: #eaeaea;
  border-radius: 4px;
`;

const DetailTags = () => {
  return (
    <TechContainer>
      <StyledTitle fontSize="30px">관심있는 분야를 선택해주세요</StyledTitle>
      <ModalLabel title="true">
        입력한 정보에 맞게 콘텐츠를 추천해드려요😊
      </ModalLabel>
      <FormBox paddingTop="24px">
        <Container>
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
          <TechBox />
        </Container>
      </FormBox>
    </TechContainer>
  );
};

export default DetailTags;
