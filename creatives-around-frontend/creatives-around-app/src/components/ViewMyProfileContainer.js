import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
// Images:
import ProfilePic from '../images/fake_profiles/profile_paintrbush_man.png';
import CoverPic from '../images/fake_profiles/o-SPIEGELMAN-570.jpg';

const ViewMyProfileContainer = () => {
    return (
        <Fragment>
            <div className='App-Container'>
                <TitleWithSymbol title='My Profile' />
                
                <div className='ProfilePicsContainer'>

                    <div className='CoverPic'>
                        <img src={CoverPic} />
                    </div>

                    <div className='ProfilePic'>
                        <img src={ProfilePic} />
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )

};

export default ViewMyProfileContainer;