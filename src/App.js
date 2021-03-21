import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import Header from './components/Common/Header';
import FindPassword from './components/SignUp/FindPassword';
import PasswordForm from './components/SignUp/PasswordForm';
import Account from './pages/Account';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Study from './pages/Study';
import Mento from './pages/Mento';
import Career from './pages/Career';
import TechNews from './pages/TechNews';
import Board from './pages/Board';
import Like from './pages/Like';
import Notification from './pages/Notification'

const App = () =>  {
  const theme = unstable_createMuiStrictModeTheme();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header/>
        <div style={{paddingTop:'60px'}}>
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
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;