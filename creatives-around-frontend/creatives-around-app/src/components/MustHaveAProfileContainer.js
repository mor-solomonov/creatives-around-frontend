import React, { Fragment } from 'react'
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import GoBackButton from '../components/ButtonsAndCheckBoxs/GoBackButton';
import { Link } from 'react-router-dom';

const MustHaveAProfileContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <Logo />
                <h3>You need to have a profile to view and connect with other Visual Artists.</h3>
                <div className="alignbottom-gobackbutton">
                    <Link to='/'>
                        <GoBackButton />
                    </Link>
                </div>
            </div>
        </Fragment>
    )

};

export default MustHaveAProfileContainer;