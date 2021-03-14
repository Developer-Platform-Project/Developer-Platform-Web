import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import ContentTitle from '../../../lib/styles/ContentTitle';
import FormBox from '../../../lib/styles/FormBox';
import SettingContainer from '../../../lib/styles/SettingContainer';
import SettingTitle from '../../../lib/styles/SettingTitle';
import AccountInput from '../../../lib/styles/AccountInput';
import ErrorMessage from '../../../lib/styles/ErrorMessage';
import StyledButton from '../../../lib/styles/StyledButton';

const PasswordSetting = () => {
  const { register, handleSubmit, watch, errors } = useForm({mode: 'onSubmit'});

  const [CheckPassword, setCheckPassword] = useState(true);
  
  const password = useRef();
  password.current = watch("newPassword");

  const onSubmit = (user,event) => {
    event.target.reset();
    console.log(user);
  };

  return (
    <SettingContainer>
      <ContentTitle>비밀번호 관리</ContentTitle>
      <SettingTitle
        title="비밀번호 변경하기"
        description="계정의 비밀번호를 변경합니다."
      />
      <FormBox onSubmit={handleSubmit(onSubmit)} paddingBottom='20px'>
        <AccountInput
          label="현재 비밀번호"
          name="password"
          type="password"
          placeholder="현재 비밀번호를 입력해주세요."
          ref={register({ 
            required: true, 
            minLength: 8,
            validate: value => CheckPassword
          })}
        />
        {errors.password && errors.password.type === 'required' 
          && <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>}
        {errors.password && errors.password.type === 'minLength' 
          && <ErrorMessage>비밀번호를 8글자 이상 입력해주세요.</ErrorMessage>}
        {errors.password && errors.password.type === 'validate'
          && <ErrorMessage>현재 비밀번호가 맞지 않습니다.</ErrorMessage>}

        <AccountInput
          label="새 비밀번호"
          name="newPassword"
          type="password"
          placeholder="새 비밀번호를 입력해주세요."
          ref={register({ 
            required: true, 
            minLength: 8,
          })}
        />
        {errors.newPassword && errors.newPassword.type === 'required' 
          && <ErrorMessage>새 비밀번호를 입력해주세요.</ErrorMessage>}
        {errors.newPassword && errors.newPassword.type === 'minLength' 
          && <ErrorMessage>비밀번호를 8글자 이상 입력해주세요.</ErrorMessage>}

        <AccountInput
          label="새 비밀번호 확인"
          name="passwordConfirm"
          type="password"
          placeholder="새 비밀번호를 다시 입력해주세요."
          ref={register({ 
            required: true, 
            validate: (value) =>
              value === password.current 
          })}
        />
        {errors.passwordConfirm && errors.passwordConfirm.type === 'required' 
          && <ErrorMessage>새 비밀번호를 확인해주세요.</ErrorMessage>}
        {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' 
          && <ErrorMessage>새 비밀번호가 일치하지 않습니다.</ErrorMessage>}

        <StyledButton
          width='120px'
          height='42px'
          fontSize='14px'
          type="submit"
          value="변경하기"
        />
      </FormBox>
    </SettingContainer>
  )
}

export default PasswordSetting
