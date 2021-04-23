import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(150, 150, 150, 0.05);
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(150, 150, 150, 0.15);
  }
  ${props =>
    props.account &&
    css`
      border: 1px solid #eaeaea;
      &:hover {
        box-shadow: 0 3px 6px 0 rgba(150, 150, 150, 0.15);
      }
    `}
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const RecruitingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 8px;
`;

export const Recruiting = styled.p`
  font-size: 12px !important;
  border: 1px solid;
  padding: 2px 6px;
  border-radius: 4px;
  margin-bottom: 2px;
  color: #fff !important;
  background-color: ${props => (props.study ? '#FD7297' : '#6FB1F4')};
`;

export const StudyTitle = styled.h2`
  color: #353535;
  font-size: 18px;
  font-weight: 500;
`;

export const StudyDescription = styled.p`
  color: #757575;
  font-size: 15px;
  margin-top: 8px;
`;

export const StudyInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & span {
    color: #757575;
    font-size: 14px;
    line-height: 28px;
    padding-left: 4px;
    vertical-align: middle;
  }
`;
export const Line = styled.div`
  border-bottom: 1px solid #ededed;
  margin: 15px -24px;
`;
export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 4px;
  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    & p {
      font-size: 15px;
      color: #2b80f2;
      margin-left: 4px;
    }
  }
`;
export const HashTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 34px;
  overflow-y: hidden;
`;

export const HashTag = styled.span`
  background-color: #f2f4f8;
  border-radius: 4px;
  margin-right: 10px;
  padding: 8px;
  font-size: 12px;
  color: #32476a;
`;
