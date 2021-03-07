import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Account from './pages/Account';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

const App = () =>  {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/login' component={Login}/>
        <Route path='/sign-up' component={Register}/>
        <Route path="/account" component={Account} />
      </Switch>
    </Router>
  );
}

export default App;