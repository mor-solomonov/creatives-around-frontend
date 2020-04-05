import React from 'react'
import '../styles/App.css';
import Logo from './Logo';
import Email from './Email';
import Password from './Password';
import SignUpPageTitle from './SignUpPageTitle';
import CheckboxTerms from './CheckboxTerms'
import SignUpButton from './SignUpButton';
import GoBackButton from './GoBackButton'

export default function SignUpContainer() {
    return (
        <div className="App-Container">
            <Logo />
            <SignUpPageTitle />
            <Email />
            <Password />
            <Password />
            <CheckboxTerms />
            <SignUpButton />
            <GoBackButton />
        </div>
    )

}
