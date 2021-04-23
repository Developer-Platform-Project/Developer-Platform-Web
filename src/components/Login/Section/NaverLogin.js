import React from 'react';
import naver from 'assets/images/naver.png';
import { SocialLogin, AuthText, AuthIcon } from '../Styles';

const NaverLogin = () => {
  return (
    <SocialLogin id="naver" backgroundColor="#20c801" color="#fff">
      <AuthIcon src={naver} alt="naver" />
      <AuthText>Naver</AuthText>
    </SocialLogin>
  );
};

export default NaverLogin;
