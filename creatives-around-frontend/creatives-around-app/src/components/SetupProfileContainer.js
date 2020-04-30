import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import AddProfilePic from '../images/graphs/add_profile_pic.svg';
import AddCoverPic from '../images/graphs/add_cover_pic.svg';
import RemoveWhiteCircle from '../images/graphs/remove_white_circle.svg';
// Images > Gallery:
import GalleryEx1 from '../images/fake_profiles/abstract-1782383_960_720.webp';
import GalleryEx2 from '../images/fake_profiles/squares/4.png';
import GalleryEx3 from '../images/fake_profiles/squares/5.png';
import GalleryEx4 from '../images/fake_profiles/color-669630_960_720.jpg';
import AddPicGallery from '../images/graphs/add_pic_gallery.svg';
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
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'profilepics');
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/creatives-around/image/upload',
      {
        method: 'POST',
        body: data
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  //! TO BE CHECKED:
  const updateState = e => {
    console.log('VALUE', e.target.value);
    console.log('NAME', e.target.name);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  //! ---->
  return (
    <Fragment>
      <div className="App-Container">
        <TitleWithSymbol title="Setup Profile" />

        {/* Needs to be connected to storage and connected to the form */}
        {/* Container for AddProfilePic & AddCoverPic: */}
        <div className="SetupProfilePics flex-grid">
          <div className="col-4">
            <p></p>
          </div>
          <div className="col-4">
            <img src={AddProfilePic} alt="Add profile pic" id="AddProfilePic" />
          </div>
          <div className="col-4">
            <img src={AddCoverPic} alt="Add cover pic" id="AddCoverPic" />
          </div>
        </div>

        {/* For use with Cloudinary:  */}
        {/* <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
            />
            {loading ? (
              <h3>loading...</h3>
            ) : (
              <img src={image} style={{ width: '300px' }} />
            )} */}

        <form className="FormSetupProfile">
          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader">Full Name</h4>
            <input
              className="FullName form-control mb-4"
              placeholder=""
              type="text"
              name="fullName"
              Two
            />
            <div className="DisplayFullNameWrapper">
              <input
                type="checkbox"
                id="checkbox"
                className="CheckboxFullNameCheckbox"
                name="displayFullName"
                value={state.displayFullName}
                onChange={updateState}
              />
              <label className="DisplayFullName">
                &nbsp; &nbsp; Display on profile
              </label>
            </div>
          </div>

          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader">Username</h4>
            <input
              className="FullName form-control mb-4"
              placeholder=""
              type="text"
              name="username"
              required="true"
              onChange={updateState}
            />
          </div>

          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader">Birthday</h4>
            {/* Change format from 'MM/DD/YYYY' to DD/MM/YYYY: */}
            <input
              className="Birthday form-control mb-4"
              placeholder=""
              type="date"
              name="birthday"
              onChange={updateState}
            />
          </div>

          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader">Location</h4>
            {/* Connect to backend and add node-geocoder + geo-distance */}
            <input
              className="Location form-control mb-4"
              placeholder=""
              type="text"
              name="location"
              onChange={updateState}
            />
          </div>

          <div className="FormFieldSetupProfile">
            <div className="ArtFormsCollection Container col-md-4 text-center">
              <h4 className="FormHeader">Art forms</h4>
              <button
                type="button"
                className="ArtFormSingle btn btn-outline-light"
              >
                <p className="ArtFormsText">Water Color</p>
                <img src={RemoveWhiteCircle} alt="" srcset="" />
              </button>

              <button
                type="button"
                className="ArtFormSingle btn btn-outline-light"
              >
                <p className="ArtFormsText">Photography</p>
                <img src={RemoveWhiteCircle} alt="" srcset="" />
              </button>

              <button
                type="button"
                className="ArtFormSingle btn btn-outline-light"
              >
                <p className="ArtFormsText">Acrylic</p>
                <img src={RemoveWhiteCircle} alt="" srcset="" />
              </button>

              <button
                type="button"
                className="ArtFormSingle btn btn-outline-light"
              >
                <p className="ArtFormsText">Sculpture</p>
                <img src={RemoveWhiteCircle} alt="" srcset="" />
              </button>

              <button
                type="button"
                className="ArtFormSingle btn btn-outline-light"
              >
                <p className="ArtFormsText">Digital Art</p>
                <img src={RemoveWhiteCircle} alt="" srcset="" />
              </button>
            </div>

            {/* Create a plus sign and add */}
            <Link to="/myartforms">
              <button className="btn btn-light addArtSetup">
                Select art forms
              </button>
            </Link>
            {/* ---> */}
          </div>
          {/* ---> End example art forms */}

          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader GalleryHeader">Gallery</h4>
            <div className="ViewProfileGallery">
              <div className="ViewProfileGallerySingle">
                <img src={GalleryEx1} alt="" className="profileGalleryPic" />
              </div>
              <div className="ViewProfileGallerySingle">
                <img src={GalleryEx2} alt="" className="profileGalleryPic" />
              </div>
              <div className="ViewProfileGallerySingle">
                <img src={GalleryEx3} alt="" className="profileGalleryPic" />
              </div>
              <div className="ViewProfileGallerySingle">
                <img src={GalleryEx4} alt="" className="profileGalleryPic" />
              </div>
              <div className="ViewProfileGallerySingle">
                <img src={AddPicGallery} alt="" className="profileGalleryPic" />
              </div>
            </div>
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

          <div className="FormFieldSetupProfile">
            <div className="ArtFormsCollection Container col-md-4 text-center">
              <h4 className="FormHeader">Art forms</h4>

              <button
                type="button"
                className="ArtFormSingle btn btn-outline-light"
              >
                <p className="ArtFormsText">Photography</p>
                <img src={RemoveWhiteCircle} alt="" srcset="" />
              </button>

              <button
                type="button"
                className="ArtFormSingle btn btn-outline-light"
              >
                <p className="ArtFormsText">Digital Art</p>
                <img src={RemoveWhiteCircle} alt="" srcset="" />
              </button>
            </div>
            <Link to="/searchartforms">
              <button className="btn btn-light addArtSetup">
                Select art forms
              </button>
            </Link>
            {/* ---> */}
          </div>

          <div className="FormFieldSetupProfile">
            <h4 className="FormHeader">Website:</h4>
            <input
              className="MyLink form-control mb-4"
              placeholder=""
              type="text"
              name="myLink"
              onChange={updateState}
            />
          </div>
          {/* Pictures needs to be made into buttons: */}
          <footer className="SetupFooter">
            <div className="FooterContainerFour">
              {/* <Link to="/myartforms">
                <button className="btn btn-light addArtSetup">
                  Select art forms
                </button>
              </Link> */}

              <Link to="/locationsettings">
                <img src={AddTravelText} alt="Add Travel" id="AddTravelText" />
              </Link>

              <Link to="/settings">
                <img src={SettingsText} alt="Settings" id="SettingsText" />
              </Link>

              <Link to="/viewmyprofile">
                <img src={CancelText} alt="Cancel" id="CancelText" />
              </Link>

              <Link to="/viewmyprofile">
                <img src={SaveText} alt="Save" id="SaveText" />
              </Link>
            </div>
          </footer>
        </form>
      </div>
    </Fragment>
  );
}
