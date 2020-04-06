import React, { Fragment } from 'react'
import '../styles/App.css';
import Logo from './Logo';

const ActivationKeySentContainer = () => {
    return (
        <Fragment>

            <div className="App-Container">
                <Logo />
                <h3>An Activation Key has been sent to your email</h3>
            </div>
        </Fragment>
    )

};

export default ActivationKeySentContainer;