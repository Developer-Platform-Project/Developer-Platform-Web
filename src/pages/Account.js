import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch, 
  withRouter 
} from "react-router-dom";
import SidebarContainer from '../lib/styles/SidebarContainer';
import AccountMenu from '../components/Account/AccountMenu';
import AccountPage from '../components/Account/AccountPage';
import EmailSetting from '../components/Account/Section/EmailSetting';
import PasswordSetting from '../components/Account/Section/PasswordSetting';
import NotificationSetting from '../components/Account/Section/NotificationSetting';
import AccountDelete from '../components/Account/Section/AccountDelete';
import ProfileSetting from '../components/Account/Section/ProfileSetting';
import StudySetting from '../components/Account/Section/StudySetting';
import MentoSetting from '../components/Account/Section/MentoSetting';

function Account({match}) {
  return (
    <Router>
      <div style={{height: 'calc(100vh - 60px)', backgroundColor:'#fff'}}>
        <SidebarContainer>
          <AccountMenu/>
          <Switch>
            <Route exact path={`${match.path}/settings`} component={AccountPage} />
            <Route path={`${match.path}/settings/email`} component={EmailSetting} />
            <Route path={`${match.path}/settings/password`} component={PasswordSetting} />
            <Route path={`${match.path}/settings/notifications`} component={NotificationSetting} />
            <Route path={`${match.path}/settings/delete`} component={AccountDelete} />
            <Route path={`${match.path}/profile`} component={ProfileSetting} />
            <Route path={`${match.path}/study`} component={StudySetting} />
            <Route path={`${match.path}/mento`} component={MentoSetting} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </SidebarContainer>
      </div>
    </Router>
  )
}

export default withRouter(Account);

