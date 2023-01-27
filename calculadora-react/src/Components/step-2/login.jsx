import React from "react";
import { GoogleLogin } from "react-google-login";
const CLIENT_ID =
  "760068272484-0n6p67v1k5d9t1vi4tla6333f8c4o7h0.apps.googleusercontent.com";
function Login() {
  const onSuccess = (res) => {
    console.log("Login Successful", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login Failed", res.profileObj);
  };
  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
