import React from 'react';
import { SocialLogin, AuthText, AuthIcon } from '../Styles';
import naver from 'assets/images/naver.png';


const NaverLogin = () => {
  return (
    <SocialLogin
      id="naver"
      backgroundColor="#20c801"
      color="#fff"
    >
      <AuthIcon src={naver} alt="naver"/>
      <AuthText>Naver</AuthText>
    </SocialLogin>
  )
}

export default NaverLogin;