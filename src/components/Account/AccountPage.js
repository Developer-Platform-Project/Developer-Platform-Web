import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Controller, useForm } from "react-hook-form";
import ContentTitle from '../../lib/styles/ContentTitle';
import CustomSelect from '../../lib/styles/CustomSelect';
import SettingTitle from '../../lib/styles/SettingTitle';
import FormBox from '../../lib/styles/FormBox';
import AccountInput from '../../lib/styles/AccountInput';
import SettingContainer from '../../lib/styles/SettingContainer';
import StyledButton from '../../lib/styles/StyledButton';
import ErrorMessage from '../../lib/styles/ErrorMessage';
import LinkText from '../../lib/styles/LinkText';
import genderOptions from '../../lib/options/genderOptions';

const AccountPage = () => {
  const { handleSubmit, watch, control} = useForm({mode: 'onBlur'});

  const [IsAlert, setIsAlert] = useState({
    alertName: false,
    alertEmail: false,
  });
  const { alertName, alertEmail,} = IsAlert;
 
  const [UserInfo, setUserInfo] = useState({
    userName: '박지연',
    userEmail: 'jyp933@gmail.com',
    userGender: { value: "여", label: "여" }
  });
  const { userName, userEmail, userGender } = UserInfo;

  const onSubmit = (user,event) => {
      event.target.reset();
      console.log(user);
  };

  const [Gender, setGender] = useState(null);
  const onSelect = (item) => {
    setGender(item);
  };

  const onAlert = (e) => {
    const Name = e.currentTarget.name;
    if(Name === 'id') {
      setIsAlert({...IsAlert, alertId : true})
    } else if(Name === 'name') {
      setIsAlert({...IsAlert, alertName : true})
    } else if(Name === 'email') {
      setIsAlert({...IsAlert, alertEmail: true});
    }
  }

  return (
    <SettingContainer>
      <ContentTitle>계정 기본 정보</ContentTitle>
      <SettingTitle
        title="기본 정보"
        description="계정의 기본 정보를 설정합니다."
      />
      <FormBox onSubmit={handleSubmit(onSubmit)} paddingBottom='20px'>
        <AccountInput
          readOnly
          label="이름"
          name="name"
          type="text"
          value={userName}
          onClick={onAlert}
        />
        {alertName &&
          <ErrorMessage>이름은 변경할 수 없습니다.</ErrorMessage>
        }

        <AccountInput
          readOnly
          icon
          label="이메일"
          name="email"
          type="text"
          value={userEmail}
          onClick={onAlert}
        />
        {alertEmail &&
          <ErrorMessage>
            이메일은  
            <Link to="/account/settings/email">
              <LinkText color='#2b80f2'> 이메일 관리 </LinkText> 
            </Link>
            페이지에서 변경해주세요.
          </ErrorMessage>
        }
        <Controller
          as={CustomSelect}
          options={genderOptions}
          onChange={onSelect}
          name="gender"
          placeholder={"성별을 선택해주세요."}
          value={userGender}
          defaultValue={userGender || Gender}
          isClearable
          account
          control={control}
        />
        <StyledButton
          width='120px'
          height='42px'
          fontSize='14px'
          type="submit"
          value="변경사항 저장"
        />
      </FormBox>
    </SettingContainer>
  )
}

export default AccountPage;
