import React from 'react';
import './Logo.css';
import logo from '../../assets/images/logo.png';

const Logo = () => {
  return <img className="imgLogo" src={logo} alt="Logo" />;
};

export default Logo;