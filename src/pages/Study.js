import React from 'react';
import { MainContainer, FlexContainer } from 'styles/container';
import Content from 'components/Study/StudyView';
import { Route } from 'react-router-dom';
import StudyDetail from 'components/Study/StudyDetail';

const Study = ({ match }) => {
  return (
    <MainContainer>
      <FlexContainer>
        <Route exact path={`${match.path}`} component={Content} />
        <Route path={`${match.path}/:id`} component={StudyDetail} />
      </FlexContainer>
    </MainContainer>
  );
};

export default Study;
