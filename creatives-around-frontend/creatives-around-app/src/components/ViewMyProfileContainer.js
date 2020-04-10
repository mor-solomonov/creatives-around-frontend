import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';


const ViewMyProfileContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="My Profile" />
            </div>
        </Fragment>
    )

};

export default ViewMyProfileContainer;