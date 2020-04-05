import React from 'react';
import Logo from './Logo';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function LoginContainer() {
  return (
    <div className='App-Container'>
      <Logo />
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
