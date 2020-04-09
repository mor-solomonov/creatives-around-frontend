import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';


const MyArtFormsContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="My Art Forms" />
            </div>
        </Fragment>
    )

};

export default MyArtFormsContainer;