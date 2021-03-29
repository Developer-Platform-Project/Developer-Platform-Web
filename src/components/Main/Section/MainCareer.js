import React from 'react';
import { ContentHeader, ViewMore, ButtonBox } from 'lib/form/styles';
import { ContentTitle } from 'lib/typography/styles';
import PrevButton from 'lib/form/PrevButton';
import NextButton from 'lib/form/NextButton';

const MainCareer = () => {
  return (
    <>
      <ContentHeader>
        <ContentTitle>🧑🏻‍💻 진행중인 채용 프로그램</ContentTitle>
        <ButtonBox>
          <ViewMore>전체보기</ViewMore>
          <PrevButton/>
          <NextButton/>
        </ButtonBox>
      </ContentHeader>
    </>
  )
}

export default MainCareer;