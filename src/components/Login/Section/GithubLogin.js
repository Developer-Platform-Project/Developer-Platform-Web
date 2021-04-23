import React from 'react';
import github from 'assets/images/github.png';
import { SocialLogin, AuthText, AuthIcon } from '../Styles';

const GitHubLogin = () => {
  return (
    <SocialLogin id="github" backgroundColor="#000" color="#fff">
      <AuthIcon src={github} alt="github" />
      <AuthText>Github</AuthText>
    </SocialLogin>
  );
};

export default GitHubLogin;
