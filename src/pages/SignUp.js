import React from 'react';
import Content from 'components/SignUp/Content';
import SignUpModal from 'components/SignUp/Section/SignUpModal';
import { MainContainer, FlexContainer } from 'lib/container/styles';
import { Route, withRouter } from "react-router-dom";

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
