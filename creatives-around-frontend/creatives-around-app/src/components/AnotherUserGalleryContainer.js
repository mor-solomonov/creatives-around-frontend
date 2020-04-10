import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';

const AnotherUserGalleryContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Gallery" />
            </div>
        </Fragment>
    )

};

export default AnotherUserGalleryContainer;