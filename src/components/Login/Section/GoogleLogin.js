import React from 'react';
import { GoogleLogin } from 'react-google-login';
import googleLogo from 'assets/images/glogo.png';
import { SocialLogin, AuthText, AuthIcon } from '../Styles';

function GoogleLoginHooks() {
  const responseGoogle = response => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId="1033799755829-9o6h6ovnc8gcse0t540h5r6t2snqe0sj.apps.googleusercontent.com"
      render={renderProps => (
        <SocialLogin
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <AuthIcon src={googleLogo} alt="googleLogo" />
          <AuthText>Google</AuthText>
        </SocialLogin>
      )}
      buttonText="login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  );
}

export default GoogleLoginHooks;
