import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router';
import { setUserInfo } from '../../modules/common';
import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import StyledCheckbox from '../Common/styles/StyledCheckbox';
import FlexContainer from '../Common/styles/FlexContainer';
import FormBox from '../Common/styles/FormBox';
import IntroTitle from '../Common/styles/IntroTitle';
import StyledButton from '../Common/styles/StyledButton';
import StyledInput from '../Common/styles/StyledInput';
import ErrorMessage from '../Common/styles/ErrorMessage';
import LoginLink from './Section/LoginLink';

const Content = ({history}) => {
  const { register, handleSubmit, watch, errors } = useForm({mode: 'onBlur'});
  const apiUrl = useSelector(state => state.common.apiUrl);
  const dispatch = useDispatch();
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
              userId: user.id,
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
              userId: savedUserInfo.userId,
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
    <FlexContainer>
      <IntroTitle>시작하기</IntroTitle>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          label="아이디"
          name="id"
          type="text"
          placeholder="아이디"
          ref={register({ 
            required: true, 
          })}
        />
        {errors.id && errors.id.type === 'required'
          && <ErrorMessage>아이디를 입력해주세요.</ErrorMessage>}
        <StyledInput
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          ref={register({ 
            required: true, 
            minLength: 10 
          })}
        />
        {errors.password && errors.password.type === 'required' 
          && <ErrorMessage>비밀번호를 확인해주세요.</ErrorMessage>}
        {errors.password && errors.password.type === 'minLength' 
          && <ErrorMessage>비밀번호를 10글자 이상 입력해주세요.</ErrorMessage>}
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
      <LoginLink/>
    </FlexContainer>
  )
}

export default withRouter(Content);
