import React from 'react';
import { FormBox } from 'styles/form/styles';
import { ModalContainer } from 'styles/container';
import { ModalLabel, StyledTitle } from 'styles/typography';

const DetailRegion = () => {
  return (
    <ModalContainer>
      <StyledTitle fontSize="30px">어디서 주로 활동하세요?</StyledTitle>
      <ModalLabel title="true">
        입력한 정보에 맞게 콘텐츠를 추천해드려요😊
      </ModalLabel>
      <FormBox paddingTop="24px">
        <ModalLabel label="true">활동 지역</ModalLabel>
      </FormBox>
    </ModalContainer>
  );
};

export default DetailRegion;
