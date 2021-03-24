import React from 'react';
import styled from 'styled-components';
import { MainContainer } from 'lib/container/styles';
import { ContentTitle } from 'lib/typography/styles';
import { ContentHeader, ViewMore } from 'lib/form/styles';
import PrevButton from 'lib/form/PrevButton';
import NextButton from 'lib/form/NextButton';
import StudyCard from './Study/StudyCard';

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 100px;
`


const MainStudy = () => {
  return (
    <MainContainer>
      <ContentHeader>
        <ContentTitle>추천! 인기 많은 스터디</ContentTitle>
        <div style={{display: 'flex'}}>
          <ViewMore>전체보기</ViewMore>
          <PrevButton/>
          <NextButton/>
        </div>
      </ContentHeader>
      <ContentBox>
        <StudyCard/>
        <StudyCard/>
        <StudyCard/>
      </ContentBox>
    </MainContainer>
  )
}

export default MainStudy;