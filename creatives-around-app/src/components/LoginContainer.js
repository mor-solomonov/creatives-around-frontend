import React from 'react';
import Logo from './Logo';
import LoginPageTitle from './LoginPageTitle';
import Email from './Email';
import Password from './Password';
import LoginButton from './LoginButton';
import SignUp from './SignUp';

export default function LoginContainer() {
    return (
        <div className="App-Container">
            <Logo />
            <LoginPageTitle />
            <Email />
            <Password />
            <LoginButton />
            <SignUp />
        </div>
    )
}
