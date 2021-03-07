import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { withRouter} from 'react-router';
import FlexContainer from '../../Common/styles/FlexContainer';
import FormBox from '../../Common/styles/FormBox';
import IntroTitle from '../../Common/styles/IntroTitle';
import StyledButton from '../../Common/styles/StyledButton';
import StyledInput from '../../Common/styles/StyledInput';
import ErrorMessage from '../../Common/styles/ErrorMessage';
import Header from '../../Common/Header';
import Article from '../../Common/styles/Article';
import LinkText from '../../Common/styles/LinkText';

const PasswordLink = ({history}) => {
  const { register, handleSubmit, watch, errors } = useForm({mode: 'onBlur'});
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (user,event) => {
      event.target.reset();
      console.log(user);
  };
  
  return (
    <>
    <Header/>
    <FlexContainer>
      <IntroTitle marginBottom='10px'>비밀번호 재설정</IntroTitle>
      <Article>재설정할 비밀번호를 입력해주세요.</Article>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
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

        <StyledButton 
          type="submit"
          value="재설정 메일 보내기"
        />
      </FormBox>
       <LinkText
        p="비밀번호를 재설정 하셨나요?"
        link="로그인하기"
       />
    </FlexContainer>
    </>
  )
}

export default withRouter(PasswordLink);
