import React from 'react';
import { ContentHeader, ViewMore, ButtonBox } from 'styles/form/styles';
import { ContentTitle } from 'styles/typography';
import PrevButton from 'styles/form/PrevButton';
import NextButton from 'styles/form/NextButton';

const MainCareer = () => {
  return (
    <>
      <ContentHeader>
        <ContentTitle>🧑🏻‍💻 진행중인 채용 프로그램</ContentTitle>
        <ButtonBox>
          <ViewMore>전체보기</ViewMore>
          <PrevButton />
          <NextButton />
        </ButtonBox>
      </ContentHeader>
    </>
  );
};

export default MainCareer;
