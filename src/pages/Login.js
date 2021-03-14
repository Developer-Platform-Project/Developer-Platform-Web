import React from 'react';
import MainContainer from '../lib/styles/MainContainer';
import FlexContainer from '../lib/styles/FlexContainer';
import Content from '../components/Login/Content';

const Login = () => {
  return (
    <MainContainer>
      <FlexContainer>
        <Content/>
      </FlexContainer>
    </MainContainer>
  );
};

export default Login;