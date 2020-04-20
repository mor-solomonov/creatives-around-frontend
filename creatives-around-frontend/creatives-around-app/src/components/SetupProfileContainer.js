import React, { Fragment } from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import AddProfilePic from '../images/graphs/add_profile_pic.svg';
import AddCoverPic from '../images/graphs/add_cover_pic.svg';
import RemoveWhiteCircle from '../images/graphs/remove_white_circle.svg';
// Images for footer:
import AddTravelText from '../images/graphs/add_travel_text.svg';
import SettingsText from '../images/graphs/settings_text.svg';
import CancelText from '../images/graphs/cancel_text.svg';
import SaveText from '../images/graphs/save_text.svg';
// ---->

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
                {/* Container for AddProfilePic & AddCoverPic: */}
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


            <form className='FormSetupProfile'>
                
                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Full Name</h4>
                        <input
                            className='FullName form-control mb-4'
                            placeholder=''
                            type='text'
                            name='fullName'Two

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
                            required='true'
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

                    {/* Create a plus sign and add */}
                    <button>ADD ART FORM</button>
                    {/* ---> */}

                </div>
                    {/* ---> End example art forms */}

                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Gallery</h4>
                {/* Insert real gallery */}
                        <div className="tempGallery" />
                </div>

                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Bio (optional)</h4>
                        <input
                            className='Bio form-control mb-4'
                            placeholder=''
                            type='text'
                            name='bio'
                            onChange={updateState}
                        />
                </div>

                <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>I am looking for (optional)</h4>
                        <input
                            className='LookingFor form-control mb-4'
                            placeholder=''
                            type='text'
                            name='lookingFor'
                            onChange={updateState}
                        />

                        
                </div>

                    {/* Example of Art forms (Looking for): */}
                    <div className='ArtFormsLookingForCollection'>

                        <div className='ArtFormLookingForSingle'>
                            <p className='ArtFormsText'>
                                Water Color
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>

                        <div className='ArtFormLookingForSingle'>
                            <p className='ArtFormsText'>
                                Photography
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>
                
                        <div className='ArtFormLookingForSingle'>
                            <p className='ArtFormsText'>
                                Acrylic
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>

                        <div className='ArtFormLookingForSingle'>
                            <p className='ArtFormsText'>
                                Sculpture
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>

                        <div className='ArtFormLookingForSingle'>
                            <p className='ArtFormsText'>
                                Digital Art
                                <img src={RemoveWhiteCircle} alt='Add profile pic' className='RemoveArtForm'/>
                            </p>
                        </div>

                    </div>

                    {/* Create a plus sign and add */}
                    <button>ADD ART FORM</button>
                    {/* ---> */}
                    {/* ---> End example art forms (looking for) */}


                    {/* Links: */}
                    {/* Needs: remove-link, add-link and so on... */}
                    <div className='FormFieldSetupProfile'>
                    <h4 className='FormHeader'>Website</h4>
                        <input
                            className='MyLink form-control mb-4'
                            placeholder=''
                            type='text'
                            name='myLink'
                            onChange={updateState}
                        />
                </div>

            {/* Create a plus sign and add */}
            <button>ADD ART FORM</button>
            {/* ---> */}
          </div>
          {/* ---> End example art forms */}

          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader">Gallery</h4>
            {/* Insert real gallery */}
            <div className="tempGallery" />
          </div>

          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader">Bio (optional)</h4>
            <input
              className="Bio form-control mb-4"
              placeholder=""
              type="text"
              name="bio"
              onChange={updateState}
            />
          </div>

          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader">I am looking for (optional)</h4>
            <input
              className="LookingFor form-control mb-4"
              placeholder=""
              type="text"
              name="lookingFor"
              onChange={updateState}
            />
          </div>

          {/* Example of Art forms (Looking for): */}
          <div className="ArtFormsLookingForCollection">
            <div className="ArtFormLookingForSingle">
              <p className="ArtFormsText">
                Water Color
                <img
                  src={RemoveWhiteCircle}
                  alt="Add profile pic"
                  className="RemoveArtForm"
                />
              </p>
            </div>

            <div className="ArtFormLookingForSingle">
              <p className="ArtFormsText">
                Photography
                <img
                  src={RemoveWhiteCircle}
                  alt="Add profile pic"
                  className="RemoveArtForm"
                />
              </p>
            </div>

            <div className="ArtFormLookingForSingle">
              <p className="ArtFormsText">
                Acrylic
                <img
                  src={RemoveWhiteCircle}
                  alt="Add profile pic"
                  className="RemoveArtForm"
                />
              </p>
            </div>

            <div className="ArtFormLookingForSingle">
              <p className="ArtFormsText">
                Sculpture
                <img
                  src={RemoveWhiteCircle}
                  alt="Add profile pic"
                  className="RemoveArtForm"
                />
              </p>
            </div>

            <div className="ArtFormLookingForSingle">
              <p className="ArtFormsText">
                Digital Art
                <img
                  src={RemoveWhiteCircle}
                  alt="Add profile pic"
                  className="RemoveArtForm"
                />
              </p>
            </div>
          </div>

          {/* Create a plus sign and add */}
          <button>ADD ART FORM</button>
          {/* ---> */}
          {/* ---> End example art forms (looking for) */}

          {/* Links: */}
          {/* Needs: remove-link, add-link and so on... */}
          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader">Website</h4>
            <input
              className="MyLink form-control mb-4"
              placeholder=""
              type="text"
              name="myLink"
              onChange={updateState}
            />
          </div>

          {/* Pictures needs to be made into buttons: */}
          <footer>
            <div className="FooterContainerFour">
              <div>
                <img src={AddTravelText} alt="Add Travel" id="AddTravelText" />
              </div>

              <div>
                <img src={SettingsText} alt="Settings" id="SettingsText" />
              </div>

              <div>
                <img src={CancelText} alt="Cancel" id="CancelText" />
              </div>

              <div>
                <img src={SaveText} alt="Save" id="SaveText" />
              </div>
            </div>
          </footer>
        </form>
      </div>
    </Fragment>
  );
}
