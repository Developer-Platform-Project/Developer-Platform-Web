import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import { MainContainer, FlexContainer } from 'lib/container/styles';
import { FormBox, StyledButton } from 'lib/form/styles';
import { LoginTitle, TitleDescription, ErrorMessage, TextBox } from 'lib/typography/styles';
import StyledInput from 'lib/form/StyledInput';

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

          <StyledButton type="submit"> 비밀번호 재설정하기 </StyledButton>
        </FormBox>
        <TextBox>
          <span>비밀번호를 재설정 하셨나요?</span>
          <Link to="/login">
            <span>로그인 하기</span>
          </Link>
        </TextBox>
      </FlexContainer>
    </MainContainer>
  )
}

export default withRouter(PasswordLink);
