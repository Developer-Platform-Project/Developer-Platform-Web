import React from 'react';
import styled from 'styled-components';
import GitHubLogin from './GithubLogin';
import GoogleLoginHooks from './GoogleLogin';
import NaverLogin from './NaverLogin';

const OAuthLogin = () => {
  return (
    <Container>
      <GoogleLoginHooks />
      <GitHubLogin />
      <NaverLogin />
    </Container>
  );
};

export default OAuthLogin;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 408px;
  width: 100%;
`;
