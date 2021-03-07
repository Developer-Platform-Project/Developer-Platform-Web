import React from 'react';
import SocialLogin from '../../Common/styles/SocialLogin';
import LoginIcon from '../../Common/styles/LoginIcon';
import github from '../../../assets/images/github.png';
import LoginText from '../../Common/styles/LoginText';


const GitHubLogin = () => {
  return (
    <SocialLogin
      id="github"
      backgroundColor="#000"
      color="#fff"
    >
      <LoginIcon src={github} alt="github"/>
      <LoginText>Github</LoginText>
    </SocialLogin>
  )
}

export default GitHubLogin;