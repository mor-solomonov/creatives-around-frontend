import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';


const ConnectionsContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Connections" />

            </div>
        </Fragment>
    )

};

export default ConnectionsContainer;