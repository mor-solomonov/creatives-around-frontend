import React, { Fragment } from 'react'
import '../styles/App.css';
import Logo from './Logo';

const AccountDeletedContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <Logo />
                <h3>Your account has been deleted</h3>
            </div>
        </Fragment>
    )

};

export default AccountDeletedContainer;