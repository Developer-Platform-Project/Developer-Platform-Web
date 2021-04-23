import React from 'react';
import { ContentHeader, ButtonBox, ViewMore } from 'styles/form/styles';
import { ContentTitle } from 'styles/typography';
import PrevButton from 'styles/form/PrevButton';
import NextButton from 'styles/form/NextButton';

const MainTech = () => {
  return (
    <>
      <ContentHeader>
        <ContentTitle>⚙️ 최신 트렌드 테크뉴스</ContentTitle>
        <ButtonBox>
          <ViewMore>전체보기</ViewMore>
          <PrevButton />
          <NextButton />
        </ButtonBox>
      </ContentHeader>
    </>
  );
};

export default MainTech;
