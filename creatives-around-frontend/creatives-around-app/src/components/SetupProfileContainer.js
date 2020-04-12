import React, { Fragment } from 'react'
import '../styles/App.css'
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import AddProfilePic from '../images/graphs/add_profile_pic.svg';
import AddCoverPic from '../images/graphs/add_cover_pic.svg';



export default function SetupProfileContainer() {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Setup Profile" />
                <div className="flex-grid SetupProfilePics">
                    <div className="col">
                        <p></p>
                    </div>
                    <div className="col">
                        <img src={AddProfilePic} alt="Add profile pic" id="AddProfilePic"/>
                    </div>
                    <div className="col">
                        <img src={AddCoverPic} alt="Add cover pic" id="AddCoverPic"/>
                    </div>


                </div>
                
            </div>
        </Fragment>
    )

}