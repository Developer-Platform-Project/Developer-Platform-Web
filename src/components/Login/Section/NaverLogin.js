import React from 'react';
import SocialLogin from '../../Common/styles/SocialLogin';
import LoginIcon from '../../Common/styles/LoginIcon';
import naver from '../../../assets/images/naver.png';
import LoginText from '../../Common/styles/LoginText';


const GitHubLogin = () => {
  return (
    <SocialLogin
      id="naver"
      backgroundColor="#20c801"
      color="#fff"
    >
      <LoginIcon src={naver} alt="naver"/>
      <LoginText>Naver</LoginText>
    </SocialLogin>
  )
}

export default GitHubLogin;