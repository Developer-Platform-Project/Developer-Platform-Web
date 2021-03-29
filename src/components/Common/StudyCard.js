import React from 'react';
import TechImage from '../Common/TechImage';
import javaScript from 'assets/images/tech/javaScript.png';
import user from 'assets/images/user.png';
import styled, {css} from 'styled-components';

const Card = styled.div`
  width: 33.3%;
  height: 100%;
  padding: 20px 24px;
  margin: 0px 8px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(150,150,150,0.05);
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(150,150,150,0.15);
  }
  ${(props => props.account && css`
    border: 1px solid #eaeaea;
    &:hover {
      box-shadow: 0 3px 6px 0 rgba(150,150,150,0.15);
    }
  `)}
`
export const StudyTitle = styled.h2`
  color: #353535;
  font-size: 18px;
  font-weight: 500;
`
export const StudyDescription = styled.p`
  color: #757575;
  font-size: 15px;
  margin-top: 10px;
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

const StudyCard = ({account, title, description, location, hashTag}) => {
  return (
    <Card account={account}>
      <TechImage
        image={javaScript}
      />
      <StudyTitle>{title}</StudyTitle>
      <StudyDescription>{description}</StudyDescription>
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
        <StudyInfo> 장소 &nbsp;:&nbsp; {location} </StudyInfo>
      </div>
      <Line></Line>
      <TagBox>
        {hashTag && hashTag.map((tag) => {
          return(
            <HashTag key={tag}>#{tag}</HashTag>
          )
        })}
      </TagBox>
    </Card>
  )
}

export default StudyCard
