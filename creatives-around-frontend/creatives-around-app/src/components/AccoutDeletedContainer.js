import React, { Fragment } from 'react'
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import { Link } from 'react-router-dom';

const AccountDeletedContainer = () => {
    return (
        <Fragment>
            <div className="App-Container text-center">
                <Logo />
                <h3>Your account has been deleted. </h3>
                <div className="GoBackalignBottom">
                    <Link to='/'>  <button className="btn btn-light">Back To Login</button></Link>
                </div>
            </div>
        </Fragment>
    )

};

export default AccountDeletedContainer