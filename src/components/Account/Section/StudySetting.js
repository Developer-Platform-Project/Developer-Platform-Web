import React from 'react';
import { StatusBar, Nodata } from 'lib/form/styles';
import { SettingTitle } from 'lib/typography/styles';
import StudyCard from '../../Common/StudyCard';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 80px;
`
const StudyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  algin-items: center;
  width: 100%;
  margin: 20px 0px;
  padding-bottom: 10px;
`

const StudySetting = () => {
  const StudyData = {
    title: '스터디 모집합니다',
    description: '잠실에서 자바스크립트 기초부터 공부해서 프로젝트까지 같이 진행하실 분들 구합니다.',
    location: '서울시 / 송파구',
    hashTag: ['백엔드', '프론트엔드', '웹풀스택'],
  }

  return (
    <Container>
      <StatusBar>
        <ul>
          <li>
            <p>진행중인 스터디</p>
            <p>2개</p>
          </li>
          <li>
            <p>완료한 스터디</p>
            <p>1개</p>
          </li>
          <li>
            <p>내가 찜한 스터디</p>
            <p>없음</p>
          </li>
        </ul>
        <button>알림보기</button>
      </StatusBar>
      <SettingTitle fontSize='18px'> 진행중인 스터디 </SettingTitle>
      <StudyBox>
        <StudyCard 
          account
          title={StudyData.title}
          description={StudyData.description}
          location={StudyData.location}
          hashTag={StudyData.hashTag}
        />
        <StudyCard 
          account
          title={StudyData.title}
          description={StudyData.description}
          location={StudyData.location}
          hashTag={StudyData.hashTag}
        />
      </StudyBox>
      <SettingTitle fontSize='18px'> 완료한 스터디 </SettingTitle>
      <StudyBox>
        <StudyCard 
          account
          title={StudyData.title}
          description={StudyData.description}
          location={StudyData.location}
          hashTag={StudyData.hashTag}
        />
      </StudyBox>
      <SettingTitle fontSize='18px'> 내가 찜한 스터디 </SettingTitle>
      <StudyBox>
        <Nodata>찜한 스터디가 없습니다.</Nodata>
      </StudyBox>
    </Container>
  )
}

export default StudySetting
