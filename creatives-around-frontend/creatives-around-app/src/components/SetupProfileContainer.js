import React, { Fragment } from 'react'
import '../styles/App.css'
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import AddProfilePic from '../images/graphs/add_profile_pic.svg';
import AddCoverPic from '../images/graphs/add_cover_pic.svg';
import RemoveWhiteCircle from '../images/graphs/remove_white_circle.svg';



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
                
                {/* Needs to be connected to storage and connected to the form */}
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

                {/* ----> */}

            <form className='FormSetupProfile'>
                
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

                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Username</h4>
                        <input
                            className='FullName form-control mb-4'
                            placeholder=''
                            type='text'
                            name='username'
                            onChange={updateState}
                        />
                </div>

                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Birthday</h4>
                {/* Change format from 'MM/DD/YYYY' to DD/MM/YYYY: */}
                        <input
                            className='Birthday form-control mb-4'
                            placeholder=''
                            type='date'
                            name='birthday'
                            onChange={updateState}
                        />
                </div>

                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Location</h4>
                {/* Connect to backend and add node-geocoder + geo-distance */}
                        <input
                            className='Location form-control mb-4'
                            placeholder=''
                            type='text'
                            name='location'
                            onChange={updateState}
                        />
                </div>

                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Art forms</h4>

                    {/* Example of Art forms: */}
                    <div className='ArtFormsCollection'>

                        <div className='ArtFormSingle'>
                            <p className='ArtFormsText'>
                                Water Color
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>

                        <div className='ArtFormSingle'>
                            <p className='ArtFormsText'>
                                Photography
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>
                
                        <div className='ArtFormSingle'>
                            <p className='ArtFormsText'>
                                Acrylic
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>

                        <div className='ArtFormSingle'>
                            <p className='ArtFormsText'>
                                Sculpture
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>

                        <div className='ArtFormSingle'>
                            <p className='ArtFormsText'>
                                Digital Art
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>

                    </div>
                    {/* ---> End example art forms */}

                    {/* Create a plus sign and add */}
                    <button>ADD ART FORM</button>
                    {/* ---> */}

                </div>

                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Gallery</h4>
                {/* Insert real gallery */}
                        <div className="tempGallery" />
                </div>

                </form>
            </div>
        </Fragment>
    )

}