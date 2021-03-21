import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { setUserInfo } from '../../modules/common';
import { media } from '../../lib/styles/style-utils';
import styled from 'styled-components';
import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import StyledCheckbox from '../../lib/styles/StyledCheckbox';
import FormBox from '../../lib/styles/FormBox';
import LoginTitle from '../../lib/styles/LoginTitle';
import StyledButton from '../../lib/styles/StyledButton';
import StyledInput from '../../lib/styles/StyledInput';
import ErrorMessage from '../../lib/styles/ErrorMessage';
import TextContainer from '../../lib/styles/TextContainer';
import LinkText from '../../lib/styles/LinkText';
import OAuthLogin from './Section/OAuthLogin';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 406px !important;
  ${media.mobile`
      margin-top: 1rem;
      min-width: 340px !important;
  `}
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
const Dot = styled.div`
  display: inline-block;
  width: 2px;
  height: 2px;
  margin: 8px 12px;
  vertical-align: middle;
  background-color: #999;
`

const Content = ({history}) => {
  const { register, handleSubmit, watch, errors } = useForm({mode: 'onSubmit'});
  const apiUrl = useSelector(state => state.common.apiUrl);
  const dispatch = useDispatch();

  const [Checked, setChecked] = useState({
    checkEmail: true,
    checkPassword: true,
  })
  const { checkEmail, checkPassword } = Checked; 
  const [RememberId, setRememberId] = useState(false);

  const onSubmit = (user,event) => {
      event.target.reset();
      console.log(user);
      (async () => {
        try {
          const { data: { result, data } } = await axios({
            url: `${apiUrl}/api/user`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
              userEmail: user.email,
              password: sha256(user.password).toString()
            }
          });
          if (result) {
            dispatch(setUserInfo(data));
            sessionStorage.setItem('userInfo', JSON.stringify(data));
            history.push("/");
          }
        } catch (err) {
          console.error(err);
        }
      })();
  };

  useEffect(() => {
    if (sessionStorage.getItem('userInfo')) {      
      (async () => {
        try {
          const savedUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));
          
          const { data: { result, data } } = await axios({
            url: `${apiUrl}/api/user`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
              userEmail: savedUserInfo.userEmail,
              password: savedUserInfo.password
            }
          });
  
          if (result) {
            dispatch(setUserInfo(data));
          }
        } catch (err) {
          sessionStorage.clear();
          console.error(err);
        }
      })();
    }
  }, []);

  const onCheck = () => {
    RememberId ? setRememberId(false) : setRememberId(true);
  }
  
  return (
    <>
      <LoginTitle>시작하기</LoginTitle>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          label="이메일"
          name="email"
          type="text"
          placeholder="이메일"
          ref={register({ 
            required: true, 
            pattern: /^\S+@\S+$/i,
            validate: value => checkEmail
          })} 
        />
        {errors.email && errors.email.type === 'required'
          && <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>}
        {errors.email && errors.email.type === 'pattern'
          && <ErrorMessage>이메일 형식이 옳바르지 않습니다.</ErrorMessage>}
        {errors.email && errors.email.type === 'validate'
        && <ErrorMessage>이메일이 일치하지 않습니다.</ErrorMessage>}

        <StyledInput
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          ref={register({ 
            required: true, 
            minLength: 8,
            validate: value => checkPassword
          })}
        />
        {errors.password && errors.password.type === 'required' 
          && <ErrorMessage>비밀번호를 확인해주세요.</ErrorMessage>}
        {errors.password && errors.password.type === 'minLength' 
          && <ErrorMessage>비밀번호를 8글자 이상 입력해주세요.</ErrorMessage>}
        {errors.password && errors.password.type === 'validate' 
          && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        <StyledCheckbox
          onClick={onCheck}
          check={RememberId}
          value="로그인 유지하기"
        />
        <StyledButton 
          type="submit"
          marginTop="16px"
          value="로그인"
        />
      </FormBox>
      <Container>
        <Linebox>
          <Line/>
          <LineTitle>또는</LineTitle>
          <Line/>
        </Linebox>
        <OAuthLogin/>
        <TextContainer
          span="아직 데브이데아 회원이 아니신가요?"
        >
          <Link to="/sign-up">
            <LinkText>회원가입</LinkText>
          </Link>
          <Dot></Dot>
          <Link to="/password">
            <LinkText color='#999'>계정찾기</LinkText>
          </Link>
        </TextContainer>
      </Container>
    </>
  )
}

export default withRouter(Content);
