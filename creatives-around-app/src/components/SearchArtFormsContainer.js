import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';


export default function SearchArtFormsContainer() {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Search Art Forms" />
            </div>
        </Fragment>
    )

}