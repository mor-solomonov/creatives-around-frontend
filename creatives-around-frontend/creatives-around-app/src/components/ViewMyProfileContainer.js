import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
// Images:
import ProfilePic from '../images/fake_profiles/profile_paintrbush_man.png';
import CoverPic from '../images/fake_profiles/o-SPIEGELMAN-570.jpg';
import PicExample from '../images/fake_profiles/images.jpg';
import GalleryEx1 from '../images/fake_profiles/squares/3.png';
import GalleryEx2 from '../images/fake_profiles/squares/4.png';
import GalleryEx3 from '../images/fake_profiles/squares/5.png';
import GalleryEx4 from '../images/fake_profiles/color-669630_960_720.jpg';

// Graphics:
import RemoveWhiteCircle from '../images/graphs/remove_white_circle.svg';
import AddPicGallery from '../images/graphs/add_pic_gallery.svg';
import Settings from '../images/graphs/settings_text.svg';
import EditProfile from '../images/graphs/edit_text.svg';

/* FROM KAROL

import Context from '../store/Context';

const ViewMyProfileContainer = () => {
  const { loggedInUser } = React.useContext(Context);
  console.log('VIEW PROFILE', loggedInUser);
  return (
    <Fragment>
      <div className='App-Container'>
        <TitleWithSymbol title='My Profile' />
        {loggedInUser ? (
          <>
            <p>{loggedInUser.email}</p>
            <p>{loggedInUser.birthday}</p>
            <p>{loggedInUser.location}</p>
            <p>{loggedInUser.fullName}</p>
          </>
        ) : (
          <>
            <p>You are not loggedn in</p>
          </>
        )}

*/

const ViewMyProfileContainer = () => {
  return (
    <Fragment>
      <div className="App-Container">
        <TitleWithSymbol title="My Profile" />

        {/* Profile and Cover pics: */}
        <div className="ProfilePicsContainer">
          <div className="CoverPic">
            <img src={CoverPic} />
          </div>

          <div className="ProfilePic">
            <img src={ProfilePic} />
          </div>
        </div>

        {/* Full name, username, location, age */}
        <div className="FullNameUsername">
          <h4 className="FullName">Steve Bloom</h4>
          <h5>=</h5>
          <h4 className="Username">Tweaker</h4>
        </div>

        <div className="LocationAgeContainer">
          <div className="ProfileInfoLeft">
            <h5>Location</h5>
            <h4>Berlin</h4>
          </div>
          <div className="ProfileInfoRight">
            <h5>Age</h5>
            <h4>33</h4>
          </div>
        </div>

        {/* Art forms */}

        {/* Example of Art forms (without remove-button): */}
        <div className="ArtFormsCollection Container col-md-4 text-center">
          <h4 className="FormHeader">Art forms</h4>
          <button type="button" className="ArtFormSingle btn btn-outline-light">
            <p className="ArtFormsText">Water Color</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>

          <button type="button" className="ArtFormSingle btn btn-outline-light">
            <p className="ArtFormsText">Photography</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>

          <button type="button" className="ArtFormSingle btn btn-outline-light">
            <p className="ArtFormsText">Acrylic</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>

          <button type="button" className="ArtFormSingle btn btn-outline-light">
            <p className="ArtFormsText">Sculpture</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>

          <button type="button" className="ArtFormSingle btn btn-outline-light">
            <p className="ArtFormsText">Digital Art</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>
        </div>

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
        <div className="ProfileText">
          <h4 className="ProfileTextHeader">Bio</h4>
          <p className="ProfileTextInfo">
            I am an visual explorer that like to play with acryl, oil and
            optical illusions through photography.
          </p>
          <div className="Line" />
        </div>

        <div className="ProfileText">
          <h4 className="ProfileTextHeader">I am looking for</h4>
          <p className="ProfileTextInfo">
            Are you experimenting with photographing optical illusions? Wanna
            meet up for a chat?
          </p>
          <div className="ArtFormsCollection Container col-md-4 text-center">
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
          <div className="Line" />
        </div>

        <div className="ProfileText">
          <h4 className="ProfileTextHeader LinkHeader">Website:</h4>
          <p className="ProfileTextLink">www.stevebloom.com</p>

          <h4 className="ProfileTextHeader LinkHeader">Instagram:</h4>
          <p className="ProfileTextLink">www.instagram.com/stevebloom</p>
        </div>

        <div className="FooterContainerFour">
          <div>
            <Link style={{ textDecoration: 'none' }} to="/settings">
              <img src={Settings} alt="" />
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none' }} to="/setupprofile">
              <img src={EditProfile} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewMyProfileContainer;
