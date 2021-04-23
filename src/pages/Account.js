import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import {
  WhiteContainer,
  AccountContainer,
  SidebarContainer,
} from 'styles/container';
import loadable from '@loadable/component';
import AccountMenu from 'components/Account/AccountMenu';

const AccountSetting = loadable(() =>
  import('components/Account/Section/AccountSetting'),
);
const EmailSetting = loadable(() =>
  import('components/Account/Section/EmailSetting'),
);
const PasswordSetting = loadable(() =>
  import('components/Account/Section/PasswordSetting'),
);
const NotificationSetting = loadable(() =>
  import('components/Account/Section/NotificationSetting'),
);
const AccountDelete = loadable(() =>
  import('components/Account/Section/AccountDelete'),
);
const ProfileSetting = loadable(() =>
  import('components/Account/Section/ProfileSetting'),
);
const StudySetting = loadable(() =>
  import('components/Account/Section/StudySetting'),
);
const MentoSetting = loadable(() =>
  import('components/Account/Section/MentoSetting'),
);

function Account({ match }) {
  return (
    <WhiteContainer>
      <SidebarContainer>
        <AccountMenu />
        <AccountContainer>
          <Route
            exact
            path={`${match.path}/settings`}
            component={AccountSetting}
          />
          <Route
            path={`${match.path}/settings/email`}
            component={EmailSetting}
          />
          <Route
            path={`${match.path}/settings/password`}
            component={PasswordSetting}
          />
          <Route
            path={`${match.path}/settings/notifications`}
            component={NotificationSetting}
          />
          <Route
            path={`${match.path}/settings/delete`}
            component={AccountDelete}
          />
          <Route path={`${match.path}/profile`} component={ProfileSetting} />
          <Route path={`${match.path}/study`} component={StudySetting} />
          <Route path={`${match.path}/mento`} component={MentoSetting} />
          {/* <Route component={NotFound} /> */}
        </AccountContainer>
      </SidebarContainer>
    </WhiteContainer>
  );
}

export default withRouter(Account);
