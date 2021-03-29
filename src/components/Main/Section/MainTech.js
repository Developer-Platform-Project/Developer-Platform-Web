import React from 'react';
import { ContentHeader, ButtonBox, ViewMore } from 'lib/form/styles';
import { ContentTitle } from 'lib/typography/styles';
import PrevButton from 'lib/form/PrevButton';
import NextButton from 'lib/form/NextButton';

const MainTech = () => {
  return (
    <>
      <ContentHeader>
        <ContentTitle>⚙️ 최신 트렌드 테크뉴스</ContentTitle>
        <ButtonBox>
          <ViewMore>전체보기</ViewMore>
          <PrevButton/>
          <NextButton/>
        </ButtonBox>
      </ContentHeader>
    </>
  )
}

export default MainTech;