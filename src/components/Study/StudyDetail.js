import axios from 'axios';
import { getDetailStudyAction } from 'modules/study';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  HowToRegOutlined,
  EmojiEventsOutlined,
  PlaceOutlined,
  FavoriteBorder,
  ClassOutlined,
  DateRangeOutlined,
  EnhancedEncryptionOutlined,
  AccountCircleOutlined,
} from '@material-ui/icons';
import { HashTag, MemberTag, Recruiting } from 'styles/study';
import TechImage from './Section/TechImage';

const StudyDetail = props => {
  const dispatch = useDispatch();
  const { detailStudy } = useSelector(state => state.study);

  useEffect(() => {
    axios.get(`http://3.34.109.192${props.match.url}`).then(response => {
      dispatch(getDetailStudyAction(response.data));
    });
  }, []);

  return (
    <Container>
      <StudyBox>
        <StudyTitleBox>
          <TechImage width="100px" />
          <StudyTitle>
            <StudyBadge>
              {detailStudy.recruiting && (
                <Recruiting study>스터디 모집중</Recruiting>
              )}
              {detailStudy.mentoRecruiting && (
                <Recruiting>멘토 모집중</Recruiting>
              )}
            </StudyBadge>
            <h2>{detailStudy.title}</h2>
            <p>{detailStudy.shortDescription}</p>
          </StudyTitle>
        </StudyTitleBox>
        <Description>{detailStudy.fullDescription}</Description>
        <StudyInfos>
          <table>
            <tbody>
              <tr>
                <FirstTd>
                  <HowToRegOutlined
                    style={{ fontSize: '20px', color: '#98A8B9' }}
                  />
                  <span>인원</span>
                </FirstTd>
                <td>
                  <strong>
                    {detailStudy.counts} / {detailStudy.maxCount}명
                  </strong>
                </td>
              </tr>
              <tr>
                <FirstTd>
                  <EmojiEventsOutlined
                    style={{ fontSize: '20px', color: '#98A8B9' }}
                  />
                  <span> 레벨 </span>
                </FirstTd>
                <td>
                  <strong>{detailStudy.level}</strong>
                </td>
              </tr>
              <tr>
                <FirstTd>
                  <PlaceOutlined
                    style={{ fontSize: '20px', color: '#98A8B9' }}
                  />
                  <span> 장소 </span>
                </FirstTd>
                <td>
                  <strong>{detailStudy.location}</strong>
                </td>
              </tr>
              <tr>
                <FirstTd>
                  <FavoriteBorder
                    style={{ fontSize: '20px', color: '#98A8B9' }}
                  />
                  <span> 좋아요 </span>
                </FirstTd>
                <td>
                  <strong>{detailStudy.likes}</strong>
                </td>
              </tr>
              <tr>
                <FirstTd>
                  <EnhancedEncryptionOutlined
                    style={{ fontSize: '20px', color: '#98A8B9' }}
                  />
                  <span> 공개 여부 </span>
                </FirstTd>
                <td>
                  <strong>{detailStudy.open ? '공개' : '비공개'}</strong>
                </td>
              </tr>
              <tr>
                <FirstTd>
                  <DateRangeOutlined
                    style={{ fontSize: '20px', color: '#98A8B9' }}
                  />
                  <span> 개설 날짜 </span>
                </FirstTd>
                <td>
                  <strong>{detailStudy.publishedDateTime}</strong>
                </td>
              </tr>
              <tr>
                <FirstTd>
                  <ClassOutlined
                    style={{ fontSize: '20px', color: '#98A8B9' }}
                  />
                  <span> 태그 </span>
                </FirstTd>
                <td>
                  {detailStudy.tags?.map(tag => {
                    return (
                      <>
                        <strong key={tag}>
                          <HashTag key={tag}>#{tag}</HashTag>
                        </strong>
                      </>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <FirstTd>
                  <AccountCircleOutlined
                    style={{ fontSize: '20px', color: '#98A8B9' }}
                  />
                  <span> 멤버 </span>
                </FirstTd>
                <td>
                  {detailStudy.members?.map(member => {
                    return (
                      <strong key={member}>
                        <MemberTag key={member}>{member}</MemberTag>
                      </strong>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </StudyInfos>
      </StudyBox>
    </Container>
  );
};

export default StudyDetail;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const StudyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 40px;
  background-color: #fff;
`;

const StudyTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StudyTitle = styled.div`
  margin-left: 20px;
  & h2 {
    font-size: 28px;
  }
  & p {
    font-size: 15px;
    color: #757575;
  }
`;

const Description = styled.div`
  margin-top: 14px;
`;

const StudyBadge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  &span: first-of-type {
    margin-right: 6px;
  }
  &span: last-of-type {
    margin-left: 0px;
  }
`;

const StudyInfos = styled.div`
  width: 100%;
  margin: 30px 0px 20px 0px;
  border-top: 1px solid #eaeaea;
  line-height: 2;
  & table {
    border-collapse: collapse;
    width: 100%;
  }
  & tr {
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    & td {
      height: 48px;
      font-size: 15px;
      vertical-align: middle;
      & svg {
        vertical-align: middle;
        margin-top: -3px;
        margin-left: 14px;
        margin-right: 8px;
      }
      & span {
        line-height: 48px;
      }
      & strong {
        font-weight: 400;
      }
    }
  }
`;

const FirstTd = styled.td`
  width: 10rem;
`;

const MarginBox = styled.div`
  margin-left: -10px;
`;
