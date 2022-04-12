import React from 'react';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logox">
        <img src={logo} alt="logo" className="logo" />
        <p>ASA</p>
      </div>
        <ul>
          <li>Home</li> 
        </ul>
    </header>
  )
}

export default Header;