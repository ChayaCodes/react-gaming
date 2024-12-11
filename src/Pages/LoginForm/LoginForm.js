import React from 'react';
import './LoginForm.css';
import Logo from '../../components/Logo/Logo';
import FormContainer from '../../components/FormContiner/FormContainer';
import GlowOnInput from '../../components/GlowOnInput/GlowOnInput';
import RainbowButton from '../../components/GlowOnInput/GlowOnInput';

const LoginForm = () => {
  return (
    <FormContainer>
      <Logo />
      <h1 className="had">משתמש רשום? היכנס</h1>
      <GlowOnInput type="text" placeholder="שם משתמש" className="user-name" />
      <p className="namemes mes"></p>
      <GlowOnInput type="password" placeholder="סיסמה" className="psbord" />
      <p className="passmes mes"></p>
      <RainbowButton>לכניסה לחץ כאן</RainbowButton>
      <p>עדיין לא נרשמת? <a href="/signin" className="auth-link">הירשם כאן</a></p>
    </FormContainer>
  );
};

export default LoginForm;