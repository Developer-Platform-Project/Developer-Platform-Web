import React from 'react';
import styled from 'styled-components';
import TechImage from './TechImage';
import javaScript from 'assets/images/tech/javaScript.png';
import user from 'assets/images/user.png';

const Card = styled.div`
  width: 33.3%;
  height: 100%;
  padding: 20px 24px;
  margin: 0px 10px;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(170,170,170,0.15);
  background-color: #fff;
`
export const StudyTitle = styled.h2`
  color: #353535;
  font-size: 18px;
  font-weight: 500;
`
export const StudyDescription = styled.p`
  color: #757575;
  font-size: 15px;
  margin-top: 6px;
`
const StudyInfo = styled.span`
  color: #757575;
  font-size: 14px;
  line-height: 28px;
  padding-left: 4px;
  vertical-align: middle;
`
const UserImage = styled.img`
  width: 16px;
  vertical-align: middle;                        
`
const Line = styled.div`
  border-bottom: 1px solid #ededed;
  margin: 18px -24px;
`
const TagBox = styled.div`
  padding-bottom: 4px;
`
const HashTag = styled.span`
  background-color: #f2f4f8;
  border-radius: 4px;
  margin-right: 10px;
  padding: 8px;
  font-size: 12px;
`

const StudyCard = () => {
  return (
    <Card>
      <TechImage
        image={javaScript}
      />
      <StudyTitle>스터디 모집합니다</StudyTitle>
      <StudyDescription>잠실에서 자바스크립트 기초부터 공부해서 프로젝트까지 같이 진행하실 분들 구합니다.</StudyDescription>
      <Line></Line>
      <div>
        <span><UserImage src={user} alt="user"/></span>
        <StudyInfo> 인원 &nbsp;:&nbsp; 1 / 4명 </StudyInfo>
      </div>
      <div>
        <span><UserImage src={user} alt="user"/></span>
        <StudyInfo> 기간 &nbsp;:&nbsp; 6 개월 </StudyInfo>
      </div>
      <div>
        <span><UserImage src={user} alt="user"/></span>
        <StudyInfo> 장소 &nbsp;:&nbsp; 잠실 / 송파구 </StudyInfo>
      </div>
      <Line></Line>
      <TagBox>
        <HashTag>#백엔드</HashTag>
        <HashTag>#프론트엔드</HashTag>
        <HashTag>#웹풀스택</HashTag>
      </TagBox>
    </Card>
  )
}

export default StudyCard
