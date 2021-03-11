import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '832040387372-j1ij4vn25qhtrmm9c2n4dtqdjtd4nr2i.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;