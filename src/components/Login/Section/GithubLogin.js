import React from 'react';
import SocialLogin from '../../../lib/styles/SocialLogin';
import AuthIcon from '../../../lib/styles/AuthIcon';
import AuthText from '../../../lib/styles/AuthText';
import github from '../../../assets/images/github.png';


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