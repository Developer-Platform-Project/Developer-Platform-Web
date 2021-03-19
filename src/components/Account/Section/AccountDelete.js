import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import ContentTitle from '../../../lib/styles/ContentTitle';
import FormBox from '../../../lib/styles/FormBox';
import SettingContainer from '../../../lib/styles/SettingContainer';
import StyledButton from '../../../lib/styles/StyledButton';
import ErrorMessage from '../../../lib/styles/ErrorMessage';
import AccountInput from '../../../lib/styles/AccountInput';
import AlertBox from '../../../lib/styles/AlertBox';

const AccountDelete = () => {
  const { register, handleSubmit, watch, errors } = useForm({mode: 'onBlur'});

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (user,event) => {
      event.target.reset();
      console.log(user);
  };

  return (
    <SettingContainer>
      <ContentTitle>계정 삭제</ContentTitle>
      <FormBox onSubmit={handleSubmit(onSubmit)} paddingTop='20px'>
        <AccountInput
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          ref={register({ 
            required: true, 
            minLength: 8,
          })}
        />
        {errors.password && errors.password.type === 'required' 
          && <ErrorMessage>비밀번호를 확인해주세요.</ErrorMessage>}
        {errors.password && errors.password.type === 'minLength' 
          && <ErrorMessage>비밀번호를 8글자 이상 입력해주세요.</ErrorMessage>}

        <AccountInput
          label="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          ref={register({ 
            required: true, 
            validate: (value) =>
              value === password.current 
          })}
        />
        {errors.passwordConfirm && errors.passwordConfirm.type === 'required' 
          && <ErrorMessage>비밀번호를 확인해주세요.</ErrorMessage>}
        {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' 
          && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        <AlertBox
          title="계정 삭제"
          description="계정을 삭제하면 데브이데아의 모든 서비스에 액세스 할 수 없게 됩니다. 
          프로필 정보 및 스터디 정보 등의 개인 데이터가 영구히 삭제되고 복구가 불가능합니다."
          titleColor="#f26e6e"
          backgroundColor="#fff5f5"
          border="1px solid #FDDADA"
          marginTop='30px'
        />
        <StyledButton
          backgroundColor="#f26e6e"
          width='120px'
          height='42px'
          fontSize='14px'
          marginTop='16px'
          type="submit"
          value="계정 삭제하기"
        />
      </FormBox>    
    </SettingContainer>
  )
}

export default AccountDelete;
