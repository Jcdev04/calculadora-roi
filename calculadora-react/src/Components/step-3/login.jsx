import React from "react";
import { GoogleLogin } from "react-google-login";
const CLIENT_ID =
  "760068272484-0n6p67v1k5d9t1vi4tla6333f8c4o7h0.apps.googleusercontent.com";
function Login({ setIsSignedIn }) {
  const onSuccess = (res) => {
    setIsSignedIn(true);
  };
  const onFailure = (res) => {
    setIsSignedIn(false);
  };
  return (
    <>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Continúa con Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className="login-button"
      />
    </>
  );
}

export default Login;
