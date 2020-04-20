import React, { Fragment } from 'react'
import '../styles/App.css'
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';



export default function SetupProfileContainer() {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Setup Profile" />

            </div>
        </Fragment>
    )

}