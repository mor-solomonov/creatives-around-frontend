import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';


const MyGalleryContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="My Gallery" />
            </div>
        </Fragment>
    )

};

export default MyGalleryContainer;