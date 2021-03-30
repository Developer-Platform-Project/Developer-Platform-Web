import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { WrapContainer } from 'lib/container/styles';
import Header from 'components/Common/Header';

const Main = loadable(() => import('pages/Main'));
const Login = loadable(() => import('pages/Login'));
const SignUp = loadable(() => import('pages/SignUp'));
const Account = loadable(() => import('pages/Account'));
const FindPassword = loadable(() => import('components/Password/FindPassword'));
const PasswordForm = loadable(() => import('components/Password/PasswordForm'));
const Study = loadable(() => import('pages/Study'));
const Mento = loadable(() => import('pages/Mento'));
const Career = loadable(() => import('pages/Career'));
const TechNews = loadable(() => import('pages/TechNews'));
const Board = loadable(() => import('pages/Board'));
const Like = loadable(() => import('pages/Like'));
const Notification = loadable(() => import('pages/Notification'));


const App = () =>  {
  const theme = unstable_createMuiStrictModeTheme();
  return (
    <WrapContainer>
      <Router>
        <ThemeProvider theme={theme}>
          <Header/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/login' component={Login}/>
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/account' component={Account} />
            <Route path='/password' component={FindPassword}/>
            <Route path='/passwordform' component={PasswordForm}/>
            <Route path='/study' component={Study}/>
            <Route path='/mento' component={Mento}/>
            <Route path='/career' component={Career}/>
            <Route path='/technews' component={TechNews}/>
            <Route path='/board' component={Board}/>
            <Route path='/like' component={Like}/>
            <Route path='/notifications' component={Notification}/>
          </Switch>
        </ThemeProvider>
      </Router>
    </WrapContainer>
  );
}

export default App;