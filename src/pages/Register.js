import React from 'react';
import MainContainer from '../lib/styles/MainContainer';
import FlexContainer from '../lib/styles/FlexContainer';
import Content from '../components/Register/Content';
import RegisterModal from '../components/Register/Section/RegisterModal';
import { 
  Route,
  withRouter 
} from "react-router-dom";

const Register = ({match}) => {
  return (
    <MainContainer>
      <FlexContainer>
        <Route exact path={`${match.path}`} component={Content} />
        <Route path={`${match.path}/detail`} component={RegisterModal} />
        {/* <Route component={NotFound} /> */}
      </FlexContainer>
    </MainContainer>
  )
}
export default withRouter(Register);
