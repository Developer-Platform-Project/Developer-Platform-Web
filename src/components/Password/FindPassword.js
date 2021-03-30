import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import { MainContainer, FlexContainer } from 'lib/container/styles';
import { FormBox, StyledButton } from 'lib/form/styles';
import { LoginTitle, TitleDescription, ErrorMessage, TextBox } from 'lib/typography/styles';
import StyledInput from 'lib/form/StyledInput';
import Swal from 'sweetalert2';

const FindPassword = () => {
  const { register, handleSubmit, watch, errors } = useForm({mode: 'onSubmit'});

  const [Checked, setChecked] = React.useState({
    checkName: true,
    checkEmail: true,
  });
  const {checkName, checkEmail} = Checked;

  const onSubmit = (user,event) => {
    event.target.reset();
    console.log(user);
    Swal.fire({
      title: '입력한 메일함을 확인해주세요.',
      text: '입력한 메일로 비밀번호 재설정 링크가 보내졌습니다.',
      icon: 'success',
      confirmButtonText: '확인'
    })
  };
  
  return (
    <MainContainer>
      <FlexContainer>
        <LoginTitle marginBottom='10px'>계정찾기</LoginTitle>
        <TitleDescription>가입 시 입력한 이메일 주소로 비밀번호 재설정 링크를 보내드립니다.</TitleDescription>
        <FormBox onSubmit={handleSubmit(onSubmit)} width="408px">
          <StyledInput
            label="이름"
            name="name"
            type="text"
            placeholder="이름"
            ref={register({ 
              required: true, 
              validate: value => checkName
            })}
          />
          {errors.name && errors.name.type === 'required'
            && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
          {errors.name && errors.name.type === 'validate'
            && <ErrorMessage>이름이 일치하지 않습니다.</ErrorMessage>}

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

          <StyledButton type="submit"> 재설정 메일 보내기 </StyledButton>
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
export default withRouter(FindPassword);
