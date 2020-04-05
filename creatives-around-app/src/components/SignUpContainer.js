import React from 'react'
import '../styles/App.css';
import Logo from './Logo';
import Email from './Email';
import Password from './Password';
import SignUpPageTitle from './SignUpPageTitle';

export default function SignUpContainer() {
    return (
        <div className="App-Container">
            <Logo />
            <SignUpPageTitle />
            <Email />
            <Password />
            <Password />
        </div>
    )

}
