import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';



const AppSettingsContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="App Settings" />
                <Logo />

            </div>
        </Fragment>
    )

};

export default AppSettingsContainer;