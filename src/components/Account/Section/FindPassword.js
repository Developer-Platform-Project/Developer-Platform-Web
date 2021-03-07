import React from 'react';
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

const FindPassword = ({history}) => {
  const { register, handleSubmit, watch, errors } = useForm({mode: 'onBlur'});

  const onSubmit = (user,event) => {
      event.target.reset();
      console.log(user);
  };
  
  return (
    <>
    <Header/>
    <FlexContainer>
      <IntroTitle marginBottom='10px'>계정찾기</IntroTitle>
      <Article>가입 시 입력한 이메일 주소로 비밀번호 재설정 링크를 보내드립니다.</Article>
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

        <StyledInput
          label="이메일"
          name="email"
          type="text"
          placeholder="이메일"
          ref={register({ 
            required: true, 
            pattern: /^\S+@\S+$/i,
          })} 
        />
        {errors.email && errors.email.type === 'required'
          && <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>}
        {errors.email && errors.email.type === 'pattern'
          && <ErrorMessage>이메일 형식이 옳바르지 않습니다.</ErrorMessage>}

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

export default withRouter(FindPassword);
