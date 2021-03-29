import React from 'react';
import { ContentHeader, ViewMore, ButtonBox } from 'lib/form/styles';
import { ContentTitle } from 'lib/typography/styles';
import PrevButton from 'lib/form/PrevButton';
import NextButton from 'lib/form/NextButton';

const MainCommunity = () => {
  return (
    <>
      <ContentHeader>
        <ContentTitle>👫 이데아 커뮤니티 보기</ContentTitle>
        <ButtonBox>
          <ViewMore>전체보기</ViewMore>
          <PrevButton/>
          <NextButton/>
        </ButtonBox>
      </ContentHeader>
      <div style={{height: '100px'}}></div>
    </>
  )
}

export default MainCommunity;