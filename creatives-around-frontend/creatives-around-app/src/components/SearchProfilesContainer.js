import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';

export default function SearchProfilesContainer() {
    return (
        <Fragment>
            <div className="App-Container">

                <TitleWithSymbol title="Search Profiles" />

            </div>
        </Fragment>
    )

}
