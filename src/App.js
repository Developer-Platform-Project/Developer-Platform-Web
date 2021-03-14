import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header';
import FindPassword from './components/Register/FindPassword';
import PasswordForm from './components/Register/PasswordForm';
import RegisterProfile from './components/Register/Section/RegisterProfile';
import Account from './pages/Account';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Study from './pages/Study';
import Mento from './pages/Mento';
import Career from './pages/Career';
import TechNews from './pages/TechNews';
import Board from './pages/Board';
import Like from './pages/Like';
import Notification from './pages/Notification'

const App = () =>  {
  return (
    <Router>
      <Header/>
        <div style={{paddingTop:'60px'}}>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/login' component={Login}/>
            <Route path='/sign-up' component={Register}/>
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
    </Router>
  );
}

export default App;