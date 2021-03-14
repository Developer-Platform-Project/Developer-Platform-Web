import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import FormBox from '../../lib/styles/FormBox';
import LoginTitle from '../../lib/styles/LoginTitle';
import StyledButton from '../../lib/styles/StyledButton';
import StyledInput from '../../lib/styles/StyledInput';
import ErrorMessage from '../../lib/styles/ErrorMessage';
import TitleDescription from '../../lib/styles/TitleDescription';
import LinkText from '../../lib/styles/LinkText';
import TextContainer from '../../lib/styles/TextContainer';
import MainContainer from '../../lib/styles/MainContainer';
import FlexContainer from '../../lib/styles/FlexContainer';

const PasswordLink = ({history}) => {
  const { register, handleSubmit, watch, errors } = useForm({mode: 'onBlur'});
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (user,event) => {
      event.target.reset();
      console.log(user);
      history.push('/login');
  };
  
  return (
    <MainContainer>
      <FlexContainer>
        <LoginTitle marginBottom='10px'>비밀번호 재설정</LoginTitle>
        <TitleDescription>재설정할 비밀번호를 입력해주세요.</TitleDescription>
        <FormBox onSubmit={handleSubmit(onSubmit)} width="408px">
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

          <StyledButton 
            type="submit"
            value="재설정 메일 보내기"
          />
        </FormBox>
        <TextContainer span="비밀번호를 재설정 하셨나요?">
          <Link to="/login">
            <LinkText>로그인 하기</LinkText>
          </Link>
        </TextContainer>
      </FlexContainer>
    </MainContainer>
  )
}

export default withRouter(PasswordLink);
