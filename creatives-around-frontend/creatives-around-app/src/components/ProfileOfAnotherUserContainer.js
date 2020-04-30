import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
// Images:
import EthanProfilePic from '../images/fake_profiles/eitan.jpg';
import EthanCoverPic from '../images/fake_profiles/ethan_gallery_10.png';
import PicExample from '../images/fake_profiles/images.jpg';
import EthanGalleryEx1 from '../images/fake_profiles/ethan_gallery_1.jpg';
import EthanGalleryEx2 from '../images/fake_profiles/ethan_gallery_2.jpg';
import EthanGalleryEx3 from '../images/fake_profiles/eitan_gallery_11.jpg';
import EthanGalleryEx4 from '../images/fake_profiles/ethan_gallery_4.jpg';
import EthanGalleryEx5 from '../images/fake_profiles/ethan_gallery_5.jpg';
import EthanGalleryEx6 from '../images/fake_profiles/eitan_gallery_12.jpg';

// Graphics:
import RemoveWhiteCircle from '../images/graphs/remove_white_circle.svg';
import AddPicGallery from '../images/graphs/add_pic_gallery.svg';
import Settings from '../images/graphs/settings_text.svg';
import EditProfile from '../images/graphs/edit_text.svg';
import AddConnection from '../images/graphs/add_connection.svg';
import ConnectionReqSent from '../images/graphs/connection_request_sent.svg';

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

// const imagesPath = {
//   minus:
//     {AddConnection},
//   plus:
//     {ConnectionReqSent}
// };

const ProfileOfAnotherUserContainer = () => {
  return (
    <Fragment>
      <div className="App-Container">
        <TitleWithSymbol title="My Profile" />

        {/* Profile and Cover pics: */}
        <div className="ProfilePicsContainer">
          <div className="CoverPic">
            <img src={EthanCoverPic} />
          </div>

          <img src={AddConnection} id="AddConnection" />
          <div className="ProfilePic">
            <img src={EthanProfilePic} />
          </div>
        </div>

        {/* Full name, username, location, age */}
        <div className="FullNameUsername">
          <h4 className="FullName">Eitan Schur</h4>
          <h5>=</h5>
          <h4 className="Username">Eitan</h4>
        </div>

        <div className="LocationAgeContainer">
          <div className="ProfileInfoLeft">
            <h5>Location</h5>
            <h4>Neukölln, Berlin</h4>
          </div>
          <div className="ProfileInfoRight">
            <h5>Age</h5>
            <h4>39</h4>
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
            <p className="ArtFormsText">Oil Color</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>

          <button type="button" className="ArtFormSingle btn btn-outline-light">
            <p className="ArtFormsText">Still Life</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>

          <button type="button" className="ArtFormSingle btn btn-outline-light">
            <p className="ArtFormsText">Acrylic</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>

          <button type="button" className="ArtFormSingle btn btn-outline-light">
            <p className="ArtFormsText">Painting</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>
          <button type="button" className="ArtFormSingle btn btn-outline-light">
            <p className="ArtFormsText">Portrait</p>
            <img src={RemoveWhiteCircle} alt="" srcset="" />
          </button>
        </div>

        <div className="FormFieldSetupProfile" id="viewProfileGallery">
          <h4 className="FormHeader GalleryHeader">Gallery</h4>
          <div className="ViewProfileGallery">
            <div className="ViewProfileGallerySingle">
              <img src={EthanGalleryEx1} alt="" className="profileGalleryPic" />
            </div>
            <div className="ViewProfileGallerySingle">
              <img src={EthanGalleryEx2} alt="" className="profileGalleryPic" />
            </div>
            <div className="ViewProfileGallerySingle">
              <img src={EthanGalleryEx3} alt="" className="profileGalleryPic" />
            </div>
            <div className="ViewProfileGallerySingle">
              <img src={EthanGalleryEx4} alt="" className="profileGalleryPic" />
            </div>
            <div className="ViewProfileGallerySingle">
              <img src={EthanGalleryEx5} alt="" className="profileGalleryPic" />
            </div>
            <div className="ViewProfileGallerySingle">
              <img src={EthanGalleryEx6} alt="" className="profileGalleryPic" />
            </div>
          </div>
        </div>

        {/* 

        <div className="ViewProfileGallery">
          <div className="ViewProfileGallerySingle">
            <img src={EthanGalleryEx1} alt="" className="profileGalleryPic" />
          </div>
          <div className="ViewProfileGallerySingle">
            <img src={EthanGalleryEx2} alt="" className="profileGalleryPic" />
          </div>
          <div className="ViewProfileGallerySingle">
            <img src={EthanGalleryEx3} alt="" className="profileGalleryPic" />
          </div>
          <div className="ViewProfileGallerySingle">
            <img src={EthanGalleryEx4} alt="" className="profileGalleryPic" />
          </div>
          <div className="ViewProfileGallerySingle">
            <img src={EthanGalleryEx5} alt="" className="profileGalleryPic" />
          </div>
          <div className="ViewProfileGallerySingle">
            <img src={EthanGalleryEx6} alt="" className="profileGalleryPic" />
          </div>
        </div>

 */}

        <div className="ProfileText">
          <h4 className="ProfileTextHeader">Bio</h4>
          <p className="ProfileTextInfo">
            Eitan is a self taught Israeli painter who has since 2006 been
            experimenting with various expressionist technics using mainly
            Acrylic paint. Shortly after relocating to Berlin in 2011, he
            completely switched over to oil paint whilst maintaining the similar
            artistic visions. Whilst he was suffering a heavy creative block in
            early 2015 and was unable to create for a couple of months, Eitan
            made an abrupt change by dedicating himself solemnly to painting
            small, from life, and in the Alla Prima Technic (one painting in one
            sitting) on a daily basis. Eitan has since derived influences from
            classical, but mostly modern artists, who are also sharing a similar
            passion of expressing through observation.
          </p>
          <div className="Line" />
        </div>

        <div className="ProfileText">
          <h4 className="ProfileTextHeader">I am looking for</h4>
          <p className="ProfileTextInfo">
            I am interested to meet Artist on a similar path and style. I am
            interested to collaborate in art projects and I am interested to
            organise a weekly group oil color class at my studio.
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
          <a href="https://www.eitanschurart.com/about">
            <p className="ProfileTextLink"> www.eitanschurart.com</p>
          </a>

          <h4 className="ProfileTextHeader LinkHeader">Instagram:</h4>
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.instagram.com/eitanschurart"
          >
            <p className="ProfileTextLink" id="otherProfileLinks">
              www.instagram.com/eitanschurart/
            </p>
          </a>
        </div>

        {/* <div className="FooterContainerFour">
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
        </div> */}
      </div>
    </Fragment>
  );
};

export default ProfileOfAnotherUserContainer;
