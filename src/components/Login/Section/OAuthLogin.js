import React from 'react';
import styled from 'styled-components';
import GitHubLogin from './GithubLogin';
import GoogleLoginHooks from './GoogleLogin';
import NaverLogin from './NaverLogin';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 408px;
`

const OAuthLogin = () => {
  return (
    <Container>
      <GoogleLoginHooks/>
      <GitHubLogin/>
      <NaverLogin/>
    </Container>
  )
}

export default OAuthLogin;