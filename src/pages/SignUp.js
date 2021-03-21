import React from 'react';
import MainContainer from '../lib/styles/MainContainer';
import FlexContainer from '../lib/styles/FlexContainer';
import Content from '../components/SignUp/Content';
import SignUpModal from '../components/SignUp/DetailModal/SignUpModal';
import { 
  Route,
  withRouter 
} from "react-router-dom";

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
