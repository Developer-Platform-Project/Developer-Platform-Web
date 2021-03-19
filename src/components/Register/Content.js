import React, { useRef, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../lib/styles/ErrorMessage';
import FormBox from '../../lib/styles/FormBox';
import LoginTitle from '../../lib/styles/LoginTitle';
import StyledButton from '../../lib/styles/StyledButton';
import StyledInput from '../../lib/styles/StyledInput';
import CustomSelect from '../../lib/styles/CustomSelect';
import LinkText from '../../lib/styles/LinkText';
import TextContainer from '../../lib/styles/TextContainer';
import genderOptions from '../../lib/options/genderOptions'

const Content = ({history}) => {
  const { register, handleSubmit, watch, control, errors } = useForm({mode: 'onSubmit'});
  const password = useRef();
  password.current = watch("password");

  const [CheckValidate, setCheckValidate] = useState({
    checkId: true,
    checkEmail: true,
  })
  const { checkId, checkEmail } = CheckValidate; 
  
  const [IsSelected, setIsSelected] = useState(false);
  const onSubmit = (user,event) => {
      if(user.gender === null) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
        console.log(user);
        history.push('/sign-up/detail');
      }
  };

  const [Gender, setGender] = useState(null);
  const onSelect = (item) => {
    setGender(item);
  };

  return (
    <>
      <LoginTitle>회원가입</LoginTitle>
      <FormBox onSubmit={handleSubmit(onSubmit)} width="408px">

        {/******************* 아이디 *******************/}
        <StyledInput
          label="아이디"
          name="id"
          type="text"
          placeholder="아이디"
          ref={register({ 
            required: true,
            minLength: 6,
            maxLength: 10,
            validate: value => checkId
          })}
        />
        {errors.id && errors.id.type === 'required'
          && <ErrorMessage>아이디를 입력해주세요.</ErrorMessage>}
        {errors.id && errors.id.type === 'minLength' 
        && <ErrorMessage>아이디를 6글자 이상으로 입력해주세요.</ErrorMessage>}
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
            minLength: 8,
          })}
        />
        {errors.password && errors.password.type === 'required' 
          && <ErrorMessage>비밀번호를 확인해주세요.</ErrorMessage>}
        {errors.password && errors.password.type === 'minLength' 
          && <ErrorMessage>비밀번호를 8글자 이상 입력해주세요.</ErrorMessage>}

        {/******************* 비밀번호 확인 *******************/}
        <StyledInput
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

        {/******************* 이름 *******************/}
        <StyledInput
          label="이름"
          name="name"
          type="text"
          placeholder="이름"
          ref={register({ 
            required: true, 
            maxLength: 10,
          })}
        />
        {errors.name && errors.name.type === 'required'
          && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
        {errors.name && errors.name.type === 'maxLength'
          && <ErrorMessage>이름을 10글자 이내로 작성해주세요.</ErrorMessage>}

        {/******************* 닉네임 *******************/}
        <StyledInput
          label="닉네임"
          name="nickname"
          type="text"
          placeholder="닉네임"
          ref={register({ 
            required: true, 
            maxLength: 10,
          })}
        />
        {errors.nickname && errors.nickname.type === 'required'
          && <ErrorMessage>닉네임을 입력해주세요.</ErrorMessage>}
        {errors.nickname && errors.nickname.type === 'maxLength'
          && <ErrorMessage>닉네임을 10글자 이내로 작성해주세요.</ErrorMessage>}

        {/******************* 이메일 *******************/}
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
        && <ErrorMessage>이미 가입된 이메일입니다.</ErrorMessage>}

        {/******************* 성별 *******************/}
        <Controller
          as={CustomSelect}
          options={genderOptions}
          onChange={onSelect}
          name="gender"
          placeholder={"성별을 선택해주세요."}
          defaultValue={Gender || null}
          isClearable
          control={control}
        />
        {IsSelected && <ErrorMessage>성별을 입력해주세요.</ErrorMessage>}
          
        <StyledButton
          type="submit"
          value="회원가입"
        />
      </FormBox>
      <TextContainer span="이미 회원가입을 하셨나요?">
        <Link to="/login">
          <LinkText>로그인 하기</LinkText>
        </Link>
      </TextContainer>
    </>
  )
}

export default withRouter(Content);
