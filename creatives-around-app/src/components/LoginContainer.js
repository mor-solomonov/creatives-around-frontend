import React from 'react';
import Logo from './SymbolsandTitles/Logo';
import Email from './Email';
import Password from './Password';
import LoginButton from './LoginButton';
import SignUp from './SignUp';
import DisplayTitle from './SymbolsandTitles/DisplayTitle';

export default function LoginContainer() {
    return (
        <div className="App-Container">
            <Logo />
            <DisplayTitle title="Login" />

            <Email />
            <Password />
            <LoginButton />
            <SignUp />
        </div>
    )
}
