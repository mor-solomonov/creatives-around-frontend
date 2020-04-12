import React, { Fragment } from 'react'
import '../styles/App.css'
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import AddProfilePic from '../images/graphs/add_profile_pic.svg';
import AddCoverPic from '../images/graphs/add_cover_pic.svg';



export default function SetupProfileContainer() {
    const [state, setState] = React.useState({
        displayFullName: false
    });

//! TO BE CHECKED:
    const updateState = (e) => {
        console.log('VALUE', e.target.value);
        console.log('NAME', e.target.name);
        setState({ ...state, [e.target.name]: e.target.value });
    }
//! ---->
    return (
        <Fragment>
            <div className='App-Container'>
                <TitleWithSymbol title='Setup Profile' />
                
                <div className='SetupProfilePics flex-grid'>
                    <div className='col-4'>
                        <p></p>
                    </div>
                    <div className='col-4'>
                        <img src={AddProfilePic} alt='Add profile pic' id='AddProfilePic'/>
                    </div>
                    <div className='col-4'>
                        <img src={AddCoverPic} alt='Add cover pic' id='AddCoverPic'/>
                    </div>
                </div>
                
                    <form>
                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Full Name</h4>
                        <input
                            className='FullName form-control mb-4'
                            placeholder=''
                            type='text'
                            name='fullName'
                            onChange={updateState}
                        />
                        <div className="DisplayFullNameWrapper">
                            <input type='checkbox' id='checkbox' className='CheckboxFullNameCheckbox' name='displayFullName' value={state.displayFullName} onChange={updateState} />
                            <label className='DisplayFullName'>&nbsp; &nbsp; Display on profile</label>
                        </div>
                </div>
                    </form>
            </div>
        </Fragment>
    )

}