import logo from '../images/logo.png';
import { LoginButton } from '../Login/Login';
import  Profile  from "../Login/Profile";
// eslint-disable-next-line
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
export default function NavBar() {
  const { isAuthenticated } = useAuth0();
  const [state, setState] = useState(initialValue);

  return (
    <div>
      <div className={style.navbar}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <nav className="header"> {/* Moved the navigation bar inside the NavBar component */}
        <div className="navbar-salir">
          {isAuthenticated ? <Profile /> : <LoginButton />}
        </div>
      </nav>
    </div>
  );
}
