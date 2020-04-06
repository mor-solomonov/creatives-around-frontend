import React, { Fragment } from 'react'
import '../styles/App.css';
import Logo from './Logo'

const YouNeedToHaveAProfile = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <Logo />
                <h3>You Need To Have A Profile to view and connect with other visual artists.</h3>
            </div>
        </Fragment>
    )

};

export default YouNeedToHaveAProfile;