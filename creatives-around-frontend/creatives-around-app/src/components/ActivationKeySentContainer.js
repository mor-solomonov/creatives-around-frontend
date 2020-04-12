import React from 'react'
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import GoBackButton from '../components/ButtonsAndCheckBoxs/GoBackButton'

const ActivationKeySentContainer = () => {
    return (

        <div className="App-Container">
            <Logo />
            <h3 className="activationkeysent">An Activation key has been sent to your email.</h3>
            <div className="text-center">
            </div>
            <div className="activation-key-gobackbutton">

                <GoBackButton />
            </div>
        </div>
    )

};

export default ActivationKeySentContainer;