import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';


const ConnectionsContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Connections" />
                {/* TODO: 1 search-field add button, 
                2: Wrapper ConnectionsContainer
                3: Wrapper ConnectionSingle - grid
                4: Single connection function */}

            </div>
        </Fragment>
    )

};

export default ConnectionsContainer;