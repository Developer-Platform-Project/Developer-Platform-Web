import React from 'react';
import { GoogleLogin } from 'react-google-login';
import SocialLogin from '../../Common/styles/SocialLogin';
import LoginIcon from '../../Common/styles/LoginIcon';
import googleLogo from '../../../assets/images/glogo.png';
import LoginText from '../../Common/styles/LoginText';

// const clientId = '1033799755829-9o6h6ovnc8gcse0t540h5r6t2snqe0sj.apps.googleusercontent.com';

function GoogleLoginHooks() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <GoogleLogin
      clientId='1033799755829-9o6h6ovnc8gcse0t540h5r6t2snqe0sj.apps.googleusercontent.com'
      render={renderProps => (
        <SocialLogin onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <LoginIcon src={googleLogo} alt="googleLogo"/>
          <LoginText>Google</LoginText>
        </SocialLogin>
      )}
      buttonText="login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default GoogleLoginHooks;
