import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { setUserInfo } from 'modules/common';
import { TextBox, ErrorMessage, LoginTitle } from 'lib/typography/styles';
import { FormBox, StyledButton } from 'lib/form/styles';
import { LineBox, Dot } from './Styles';
import StyledCheckbox from 'lib/form/StyledCheckbox';
import StyledInput from 'lib/form/StyledInput';
import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import OAuthLogin from './Section/OAuthLogin';

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
        <StyledButton type="submit" marginTop="16px">로그인</StyledButton>
      </FormBox>
      <FormBox>
        <LineBox>
          <hr/>
          <span>또는</span>
          <hr/>
        </LineBox>
        <OAuthLogin/>
        <TextBox>
          <span>아직 데브이데아 회원이 아니신가요?</span>
          <Link to="/sign-up">
            <span>회원가입</span>
          </Link>
          <Dot></Dot>
          <Link to="/password">
            <span style={{color: '#757575'}}>계정찾기</span>
          </Link>
        </TextBox>
      </FormBox>
    </>
  )
}

export default withRouter(Content);
