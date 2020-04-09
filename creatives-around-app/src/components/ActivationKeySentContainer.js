import React from 'react'
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import GoBackButton from '../components/ButtonsAndCheckBoxs/GoBackButton'

const ActivationKeySentContainer = () => {
    return (


        <div className="App-Container">
            <Logo />
            <h3>An activation key has been sent to your email</h3>
            <GoBackButton />
        </div>

    )

};

export default ActivationKeySentContainer;