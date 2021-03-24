import React from 'react';
import { SocialLogin, AuthText, AuthIcon } from '../Styles';
import github from 'assets/images/github.png';


const GitHubLogin = () => {
  return (
    <SocialLogin
      id="github"
      backgroundColor="#000"
      color="#fff"
    >
      <AuthIcon src={github} alt="github"/>
      <AuthText>Github</AuthText>
    </SocialLogin>
  )
}

export default GitHubLogin;