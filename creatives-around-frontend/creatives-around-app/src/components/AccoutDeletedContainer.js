import React, { Fragment } from 'react'
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import GoBackButton from '../components/ButtonsAndCheckBoxs/GoBackButton'

const AccountDeletedContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <Logo />
                <h3>Your account has been deleted</h3>
                <GoBackButton />
            </div>
        </Fragment>
    )

};

export default AccountDeletedContainer;