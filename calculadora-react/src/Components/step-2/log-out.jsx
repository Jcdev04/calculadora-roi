import React from "react";
import { GoogleLogout } from "react-google-login";
const CLIENT_ID =
  "760068272484-0n6p67v1k5d9t1vi4tla6333f8c4o7h0.apps.googleusercontent.com";

function LogOut() {
  const onSuccess = () => {
    console.log("Logout Successful");
  };
  return (
    <div>
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default LogOut;
