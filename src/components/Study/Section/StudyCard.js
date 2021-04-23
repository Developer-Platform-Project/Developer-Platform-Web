import React from 'react';
import {
  HowToRegOutlined,
  EmojiEventsOutlined,
  PlaceOutlined,
  FavoriteBorder,
} from '@material-ui/icons';
import {
  Card,
  CardHeader,
  RecruitingBox,
  Recruiting,
  StudyTitle,
  StudyDescription,
  Line,
  StudyInfo,
  TagBox,
  HashTag,
  HashTagBox,
} from 'styles/study';
import TechImage from './TechImage';

const StudyCard = ({
  account,
  title,
  description,
  level,
  counts,
  maxCount,
  location,
  tags,
  likes,
  recruiting,
  mentoRecruiting,
  publishedDateTime,
}) => {
  return (
    <Card account={account}>
      <CardHeader>
        <TechImage />
        <RecruitingBox>
          {recruiting && <Recruiting study>스터디 모집중</Recruiting>}
          {mentoRecruiting && <Recruiting>멘토 모집중</Recruiting>}
        </RecruitingBox>
      </CardHeader>
      <StudyTitle>{title}</StudyTitle>
      <StudyDescription>{description}</StudyDescription>
      <Line />
      <StudyInfo>
        <HowToRegOutlined style={{ fontSize: '18px', color: '#98A8B9' }} />
        <span>
          {' '}
          인원 &nbsp;:&nbsp; {counts} / {maxCount}명{' '}
        </span>
      </StudyInfo>
      <StudyInfo>
        <EmojiEventsOutlined style={{ fontSize: '18px', color: '#98A8B9' }} />
        <span> 레벨 &nbsp;:&nbsp; {level} </span>
      </StudyInfo>
      <StudyInfo>
        <PlaceOutlined style={{ fontSize: '18px', color: '#98A8B9' }} />
        <span> 장소 &nbsp;:&nbsp; {location} </span>
      </StudyInfo>
      <Line />
      <TagBox>
        <HashTagBox>
          {tags &&
            tags.map(tag => {
              return <HashTag key={tag}>#{tag}</HashTag>;
            })}
        </HashTagBox>
        <div>
          <FavoriteBorder style={{ fontSize: '20px', color: '#2B80F2' }} />
          <p>{likes}</p>
        </div>
      </TagBox>
    </Card>
  );
};

export default StudyCard;
