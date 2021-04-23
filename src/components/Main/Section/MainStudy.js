import React from 'react';
import styled from 'styled-components';
import { ContentTitle } from 'styles/typography';
import { ContentHeader, ButtonBox, ViewMore } from 'styles/form/styles';
import PrevButton from 'styles/form/PrevButton';
import NextButton from 'styles/form/NextButton';
import { GridContainer } from 'styles/container';
import StudyCard from '../../Study/Section/StudyCard';

const MainStudy = () => {
  const StudyData = {
    title: '스터디 모집합니다',
    description:
      '잠실에서 자바스크립트 기초부터 공부해서 프로젝트까지 같이 진행하실 분들 구합니다.',
    location: '서울시 / 송파구',
    hashTag: ['백엔드', '프론트엔드', '웹풀스택'],
  };

  return (
    <>
      <ContentHeader>
        <ContentTitle> ✏️ 추천! 인기 많은 스터디</ContentTitle>
        <ButtonBox>
          <ViewMore>전체보기</ViewMore>
          <PrevButton />
          <NextButton />
        </ButtonBox>
      </ContentHeader>
      <GridContainer>
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
      </GridContainer>
    </>
  );
};

export default MainStudy;
