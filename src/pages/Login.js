import React from 'react';
import { MainContainer, FlexContainer } from 'lib/container/styles';
import Content from 'components/Login/Content';

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