import React from 'react';
import { MainContainer, FlexContainer } from 'styles/container';
import Content from 'components/Login/Content';

const Login = () => {
  return (
    <MainContainer>
      <FlexContainer>
        <Content />
      </FlexContainer>
    </MainContainer>
  );
};

export default Login;
