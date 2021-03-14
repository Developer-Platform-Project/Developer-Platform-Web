import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AuthIcon from '../../../lib/styles/AuthIcon';
import ContentTitle from '../../../lib/styles/ContentTitle';
import ErrorMessage from '../../../lib/styles/ErrorMessage';
import FormBox from '../../../lib/styles/FormBox';
import SettingContainer from '../../../lib/styles/SettingContainer';
import SettingTitle from '../../../lib/styles/SettingTitle';
import SocialLogin from '../../../lib/styles/SocialLogin';
import StyledButton from '../../../lib/styles/StyledButton';
import AccountInput from '../../../lib/styles/AccountInput';
import LinkText from '../../../lib/styles/LinkText';
import AlertBox from '../../../lib/styles/AlertBox';
import googleLogo from '../../../assets/images/glogo.png';

const Label = styled.label`
  color: #757575;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  margin-top: 14px;
`
const CurrentEmail = styled.div`
  display: flex;
  align-items: center;
  color: #395577;
  font-size: 15px;
  font-weight: 500;
  margin: 12px 4px;
  & div {
    padding-right: 16px;
  }
`

const EmailSetting = () => {
  const { register, handleSubmit, watch, control, errors } = useForm({mode: 'onBlur'});

  const [UserEmail, setUserEmail] = useState("jyp933@gmail.com");
  const [CheckEmail, setCheckEmail] = useState(true);
  const [IsAuth, setIsAuth] = useState(true);

  const onSubmit = (user,event) => {
    event.target.reset();
    console.log(user);
  };

  return (
    <SettingContainer>
      <ContentTitle>이메일 관리</ContentTitle>
      <SettingTitle
        title="이메일 변경하기"
        description="이메일은 로그인 또는 회원정보 인증 시 사용됩니다."
      />
      <FormBox onSubmit={handleSubmit(onSubmit)} paddingBottom='20px'>
        <Label>현재 이메일 </Label>
        <CurrentEmail>
          {IsAuth && 
            <div style={{paddingTop: '4px'}}>
                <AuthIcon src={googleLogo} alt="googleLogo"/>
            </div>
          }
          <p>{UserEmail}</p>
        </CurrentEmail>
        {IsAuth &&
          <AlertBox
            title="연결된 계정"
            description="해당 메일은 Google 계정에 연결되어 있습니다. 메일을 변경 할 시 인증 정보가 변경되며 Google 계정에서의 연결이 끊어지게 됩니다."
            titleColor="#ff7f00"
            backgroundColor="#fff7eb"
            border="1px solid #F8E1BE"
            marginTop="10px"
          />
        }
        <AccountInput
          label="새 이메일"
          name="newEmail"
          type="text"
          placeholder="새 이메일을 입력해주세요."
          ref={register({ 
            required: true, 
            pattern: /^\S+@\S+$/i,
            validate: value => CheckEmail
          })} 
        />
        {errors.newEmail && errors.newEmail.type === 'required'
          && <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>}
        {errors.newEmail && errors.newEmail.type === 'pattern'
          && <ErrorMessage>이메일 형식이 옳바르지 않습니다.</ErrorMessage>}
        {errors.newEmail && errors.newEmail.type === 'validate'
        && <ErrorMessage>이미 가입된 이메일입니다.</ErrorMessage>}

        <StyledButton
          width='120px'
          height='42px'
          fontSize='14px'
          marginTop='20px'
          type="submit"
          value="변경하기"
        />
      </FormBox>
      <SettingTitle title="이메일 알림 설정"/>
      <LinkText color="#616874" fontSize="15px" fontWeight="400">
        수신할 이메일을 관리하려면 
        <Link to="/account/settings/notifications">
          <LinkText> 알림 설정</LinkText>
        </Link>
        에서 수정해주세요
      </LinkText>
    </SettingContainer>
  )
}

export default EmailSetting;
