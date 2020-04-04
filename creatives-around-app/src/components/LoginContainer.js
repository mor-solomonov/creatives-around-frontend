import React from 'react';
import Logo from './Logo';
import PageTitle from './PageTitle';
import Email from './Email';
import Password from './Password';
import LoginButton from './LoginButton';

export default function LoginContainer() {
    return (
        <div className="App-Container">
            <Logo />
            <PageTitle />
            <Email />
            <Password />
            <LoginButton />
        </div>
    )
}
