import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SettingContainer } from 'styles/container';
import { FormBox, StyledButton } from 'styles/form/styles';
import {
  SettingTitle,
  SettingDescription,
  ErrorMessage,
  AccountTitle,
} from 'styles/typography';
import AccountInput from 'styles/form/AccountInput';

const PasswordSetting = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onSubmit',
  });

  const password = useRef();
  password.current = watch('newPassword');

  const onSubmit = (user, event) => {
    event.target.reset();
    console.log(user);
  };

  return (
    <SettingContainer>
      <AccountTitle>비밀번호 관리</AccountTitle>
      <SettingTitle>비밀번호 변경하기</SettingTitle>
      <SettingDescription>계정의 비밀번호를 변경합니다.</SettingDescription>
      <FormBox onSubmit={handleSubmit(onSubmit)} paddingBottom="20px">
        <AccountInput
          label="현재 비밀번호"
          name="password"
          type="password"
          placeholder="현재 비밀번호를 입력해주세요."
          ref={register({
            required: true,
            minLength: 8,
          })}
        />
        {errors.password && errors.password.type === 'required' && (
          <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <ErrorMessage>비밀번호를 8글자 이상 입력해주세요.</ErrorMessage>
        )}

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
        {errors.newPassword && errors.newPassword.type === 'required' && (
          <ErrorMessage>새 비밀번호를 입력해주세요.</ErrorMessage>
        )}
        {errors.newPassword && errors.newPassword.type === 'minLength' && (
          <ErrorMessage>비밀번호를 8글자 이상 입력해주세요.</ErrorMessage>
        )}

        <AccountInput
          label="새 비밀번호 확인"
          name="passwordConfirm"
          type="password"
          placeholder="새 비밀번호를 다시 입력해주세요."
          ref={register({
            required: true,
            validate: value => value === password.current,
          })}
        />
        {errors.passwordConfirm &&
          errors.passwordConfirm.type === 'required' && (
            <ErrorMessage>새 비밀번호를 확인해주세요.</ErrorMessage>
          )}
        {errors.passwordConfirm &&
          errors.passwordConfirm.type === 'validate' && (
            <ErrorMessage>새 비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}

        <StyledButton width="120px" height="42px" fontSize="14px" type="submit">
          변경하기
        </StyledButton>
      </FormBox>
    </SettingContainer>
  );
};

export default PasswordSetting;
