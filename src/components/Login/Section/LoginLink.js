import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OAuthLogin from './OAuthLogin';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Linebox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
  color: #ccc;
`
const LineTitle = styled.span`
  font-size: 12px;
  padding: 0px 24px;
  white-space: nowrap;
`
const Line = styled.hr`
  width: 100%;
  border-top: 1px solid #ddd;
`
const TextContainer = styled.div`
  margin-top: 40px;
  font-size: 14px;
  text-align: center;
  color: #999;
`
const Dot = styled.div`
  display: inline-block;
  width: 2px;
  height: 2px;
  margin: 8px 12px;
  vertical-align: middle;
  background-color: #999;
`
const LinkText = styled.span`
  font-weight: 500;
  color: ${(props) => props.color || "#999"}
`

const AccountLink = () => {
  return (
    <Container>
      <Linebox>
        <Line/>
        <LineTitle>또는</LineTitle>
        <Line/>
      </Linebox>
      <OAuthLogin/>
      <TextContainer>
        <span style={{paddingRight: '20px'}}>
          아직 데브이데아 회원이 아니신가요?
        </span>
        <Link to="/sign-up">
          <LinkText color='#2b80f2'>회원가입</LinkText>
        </Link>
        <Dot></Dot>
        <Link to="/account/settings/find-password">
          <LinkText>계정찾기</LinkText>
        </Link>
      </TextContainer>
    </Container>
  )
}

export default AccountLink
