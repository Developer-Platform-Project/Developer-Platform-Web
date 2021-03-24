import React from 'react';
import styled from 'styled-components';
import GitHubLogin from './GithubLogin';
import GoogleLoginHooks from './GoogleLogin';
import NaverLogin from './NaverLogin';
import { media } from 'lib/styles/style-utils';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 408px !important;
  ${media.mobile`
      margin-top: 1rem;
      min-width: 340px !important;
  `}
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