import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TextContainer = styled.div`
  margin-top: 40px;
  font-size: 14px;
  text-align: center;
  color: #999;
`
const Text = styled.span`
  padding-left: 16px;
  font-weight: 500;
  color: #2b80f2;
`

const LinkText = ({p, link}) => {
  return (
    <TextContainer>
        <span>
          이미 비밀번호를 찾으셨나요?
        </span>
        <Link to="/login">
          <Text>로그인하기</Text>
        </Link>
      </TextContainer>
  )
}

export default LinkText;
