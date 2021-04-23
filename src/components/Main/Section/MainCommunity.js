import React from 'react';
import { ContentHeader, ViewMore, ButtonBox } from 'styles/form/styles';
import { ContentTitle } from 'styles/typography';
import PrevButton from 'styles/form/PrevButton';
import NextButton from 'styles/form/NextButton';

const MainCommunity = () => {
  return (
    <>
      <ContentHeader>
        <ContentTitle>👫 이데아 커뮤니티 보기</ContentTitle>
        <ButtonBox>
          <ViewMore>전체보기</ViewMore>
          <PrevButton />
          <NextButton />
        </ButtonBox>
      </ContentHeader>
      <div style={{ height: '100px' }} />
    </>
  );
};

export default MainCommunity;
