import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router';
import ErrorMessage from '../Common/styles/ErrorMessage';
import FlexContainer from '../Common/styles/FlexContainer';
import FormBox from '../Common/styles/FormBox';
import IntroTitle from '../Common/styles/IntroTitle';
import StyledButton from '../Common/styles/StyledButton';
import StyledInput from '../Common/styles/StyledInput';
import CustomSelector from '../Common/styles/CustomSelect';
import LinkText from '../Common/styles/LinkText';

const Content = ({history}) => {
  const { register, handleSubmit, watch, errors } = useForm({mode: 'onBlur'});
  const [CheckId, setCheckId] = useState(true);
  const [CheckEmail, setCheckEmail] = useState(true);
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (user,event) => {
      event.target.reset();
      console.log(user);
  };

  const options = [
    { value: "남", label: "남" },
    { value: "여", label: "여" },
    { value: "선택안함", label: "선택안함" }
  ];

  const [Gender, setGender] = useState(options.value);
  const onSelect = (item) => {
    setGender(options.item);
    console.log(item);
  };

  return (
    <FlexContainer>
      <IntroTitle>회원가입</IntroTitle>
      <FormBox onSubmit={handleSubmit(onSubmit)}>

        {/******************* 아이디 *******************/}
        <StyledInput
          label="아이디"
          name="id"
          type="text"
          placeholder="아이디"
          ref={register({ 
            required: true,
            maxLength: 10,
            validate: value => CheckId
          })}
        />
        {errors.id && errors.id.type === 'required'
          && <ErrorMessage>아이디를 입력해주세요.</ErrorMessage>}
        {errors.id && errors.id.type === 'maxLength' 
          && <ErrorMessage>아이디를 10글자 이내로 입력해주세요.</ErrorMessage>}
        {errors.id && errors.id.type === 'validate'
          && <ErrorMessage>이미 가입된 아이디입니다.</ErrorMessage>}

        {/******************* 비밀번호 *******************/}
        <StyledInput
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          ref={register({ 
            required: true, 
            minLength: 10,
          })}
        />
        {errors.password && errors.password.type === 'required' 
          && <ErrorMessage>비밀번호를 확인해주세요.</ErrorMessage>}
        {errors.password && errors.password.type === 'minLength' 
          && <ErrorMessage>비밀번호를 10글자 이상 입력해주세요.</ErrorMessage>}

        {/******************* 비밀번호 확인 *******************/}
        <StyledInput
          label="비밀번호 확인"
          name="confirmPassword"
          type="password"
          placeholder="비밀번호 확인"
          ref={register({ 
            required: true, 
            validate: (value) =>
              value === password.current 
          })}
        />
        {errors.confirmPassword && errors.confirmPassword.type === 'required' 
          && <ErrorMessage>비밀번호를 확인해주세요.</ErrorMessage>}
        {errors.confirmPassword && errors.confirmPassword.type === 'validate' 
          && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}

        {/******************* 이름 *******************/}
        <StyledInput
          label="이름"
          name="userName"
          type="text"
          placeholder="이름"
          ref={register({ 
            required: true, 
            maxLength: 10,
          })}
        />
        {errors.userName && errors.userName.type === 'required'
          && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
        {errors.userName && errors.userName.type === 'maxLength'
          && <ErrorMessage>이름을 10글자 이내로 작성해주세요.</ErrorMessage>}

        {/******************* 이메일 *******************/}
        <StyledInput
          label="이메일"
          name="email"
          type="text"
          placeholder="이메일"
          ref={register({ 
            required: true, 
            pattern: /^\S+@\S+$/i,
            validate: value => CheckEmail
          })} 
        />
        {errors.email && errors.email.type === 'required'
          && <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>}
        {errors.email && errors.email.type === 'pattern'
          && <ErrorMessage>이메일 형식이 옳바르지 않습니다.</ErrorMessage>}
        {errors.email && errors.email.type === 'validate'
        && <ErrorMessage>이미 가입된 이메일입니다.</ErrorMessage>}

        {/******************* 성별 *******************/}
        <CustomSelector
          placeholder={"성별을 선택해주세요."}
          value={Gender}
          options={options}
          onChange={onSelect}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.value}
        />
        <StyledButton
          type="submit"
          value="회원가입"
        />
      </FormBox>
      <LinkText
        p="이미 회원가입을 하셨나요?"
        link="로그인하기"
       />
    </FlexContainer>
  )
}

export default withRouter(Content);
