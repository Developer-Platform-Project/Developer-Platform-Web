/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { SettingContainer } from 'styles/container';
import {
  SettingTitle,
  SettingDescription,
  ErrorMessage,
  AccountTitle,
} from 'styles/typography';
import { FormBox, StyledButton } from 'styles/form/styles';
import AccountInput from 'styles/form/AccountInput';
import CustomSelect from 'styles/form/CustomSelect';
import genderOption from 'lib/options/genderOptions';

const AccountSetting = () => {
  const { handleSubmit, watch, control } = useForm({ mode: 'onBlur' });

  const [IsAlert, setIsAlert] = useState({
    alertName: false,
    alertEmail: false,
  });
  const { alertName, alertEmail } = IsAlert;

  const [UserInfo, setUserInfo] = useState({
    userName: '박지연',
    userEmail: 'jyp933@gmail.com',
    userGender: { value: '여', label: '여' },
  });
  const { userName, userEmail, userGender } = UserInfo;

  const onSubmit = (user, event) => {
    event.target.reset();
    console.log(user);
  };

  const [Gender, setGender] = useState(null);
  const onSelect = item => {
    setGender(item);
  };

  const onAlert = e => {
    const Name = e.currentTarget.name;
    if (Name === 'name') {
      setIsAlert({ ...IsAlert, alertName: true });
    } else if (Name === 'email') {
      setIsAlert({ ...IsAlert, alertEmail: true });
    }
  };

  return (
    <SettingContainer>
      <AccountTitle>계정 기본 정보</AccountTitle>
      <SettingTitle> 기본 정보 </SettingTitle>
      <SettingDescription>계정의 기본 정보를 설정합니다.</SettingDescription>
      <FormBox onSubmit={handleSubmit(onSubmit)} paddingBottom="20px">
        <AccountInput
          readOnly
          label="이름"
          name="name"
          type="text"
          value={userName}
          onClick={onAlert}
        />
        {alertName && <ErrorMessage>이름은 변경할 수 없습니다.</ErrorMessage>}
        <AccountInput
          readOnly
          icon
          label="이메일"
          name="email"
          type="email"
          value={userEmail}
          onClick={onAlert}
        />
        {alertEmail && (
          <ErrorMessage>
            이메일은
            <Link to="/account/settings/email">
              <text style={{ color: '#2b80f2' }}> 이메일 관리 </text>
            </Link>
            페이지에서 변경해주세요.
          </ErrorMessage>
        )}
        <Controller
          as={CustomSelect}
          options={genderOption}
          onChange={onSelect}
          name="gender"
          placeholder="성별을 선택해주세요."
          value={userGender}
          defaultValue={userGender || Gender}
          isClearable
          account
          control={control}
        />
        <StyledButton width="120px" height="42px" fontSize="14px" type="submit">
          변경사항 저장
        </StyledButton>
      </FormBox>
    </SettingContainer>
  );
};

export default AccountSetting;
