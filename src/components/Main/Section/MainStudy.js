import React from 'react';
import styled from 'styled-components';
import { MainContainer } from 'lib/container/styles';
import { ContentTitle } from 'lib/typography/styles';
import { ContentHeader, ViewMore } from 'lib/form/styles';
import PrevButton from 'lib/form/PrevButton';
import NextButton from 'lib/form/NextButton';
import StudyCard from '../../Common/StudyCard';

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 100px;
`

const MainStudy = () => {
  const StudyData = {
    title: '스터디 모집합니다',
    description: '잠실에서 자바스크립트 기초부터 공부해서 프로젝트까지 같이 진행하실 분들 구합니다.',
    location: '서울시 / 송파구',
    hashTag: ['백엔드', '프론트엔드', '웹풀스택'],
  }

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
        <StudyCard
          title={StudyData.title}
          description={StudyData.description}
          location={StudyData.location}
          hashTag={StudyData.hashTag}
        />
        <StudyCard
          title={StudyData.title}
          description={StudyData.description}
          location={StudyData.location}
          hashTag={StudyData.hashTag}
        />
        <StudyCard
          title={StudyData.title}
          description={StudyData.description}
          location={StudyData.location}
          hashTag={StudyData.hashTag}
        />
      </ContentBox>
    </MainContainer>
  )
}

export default MainStudy;