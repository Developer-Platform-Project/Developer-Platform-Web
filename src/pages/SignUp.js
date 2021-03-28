import React from 'react';
import { MainContainer, FlexContainer } from 'lib/container/styles';
import { Route, withRouter } from "react-router-dom";
import loadable from '@loadable/component';

const Content = loadable(() => import('components/SignUp/Content'));
const SignUpModal = loadable(() => import('components/SignUp/Section/SignUpModal'));

const SignUp = ({match}) => {
  return (
    <MainContainer>
      <FlexContainer>
        <Route exact path={`${match.path}`} component={Content} />
        <Route path={`${match.path}/detail`} component={SignUpModal} />
        {/* <Route component={NotFound} /> */}
      </FlexContainer>
    </MainContainer>
  )
}
export default withRouter(SignUp);
