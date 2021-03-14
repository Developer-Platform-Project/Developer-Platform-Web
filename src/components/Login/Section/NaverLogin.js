import React from 'react';
import SocialLogin from '../../../lib/styles/SocialLogin';
import AuthIcon from '../../../lib/styles/AuthIcon';
import AuthText from '../../../lib/styles/AuthText';
import naver from '../../../assets/images/naver.png';


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