import React from 'react';
import MainContainer from '../lib/styles/MainContainer';
import FlexContainer from '../lib/styles/FlexContainer';
import Content from '../components/Register/Content';
import RegisterProfile from '../components/Register/Section/RegisterProfile';
import { 
  Route,
  withRouter 
} from "react-router-dom";

const Register = ({match}) => {
  return (
    <MainContainer>
      <FlexContainer>
        <Route exact path={`${match.path}`} component={Content} />
        <Route path={`${match.path}/detail`} component={RegisterProfile} />
        {/* <Route component={NotFound} /> */}
      </FlexContainer>
    </MainContainer>
  )
}
export default withRouter(Register);
