import React, { Fragment } from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import RemoveWhiteCircle from '../images/graphs/remove_white_circle.svg';
//Fake profiles:
import Profile3 from '../images/fake_profiles/profile_3.png';
import EthanProfilePic from '../images/fake_profiles/eitan.jpg';
import Profile8 from '../images/fake_profiles/profile_8.png';
import Profile9 from '../images/fake_profiles/profile_9.png';
import Profile5 from '../images/fake_profiles/profile_5.png';
import Profile6 from '../images/fake_profiles/profile_6.png';
import Profile10 from '../images/fake_profiles/profile_10.png';
import Profile11 from '../images/fake_profiles/profile_11.png';
import { Link } from 'react-router-dom';

export default function SearchProfilesContainer() {
  return (
    <div className="App-Container">
      <TitleWithSymbol title="Search Profiles" />
      <form action="" className="SearchConnections">
        <input type="text" />
        <button>Search</button>
      </form>

      <div className="Messages-Container">
        <Link to="/profileofanotheruser" id="userLink">
          <div className="Search-Container">
            <img
              src={EthanProfilePic}
              className="OnlineConnection"
              alt=""
              srcset=""
            />
            <p className="NameAge">Eitan Schur, 39</p>
            <p className="KmAway">2 km away</p>
            <p className="Area">Kreuzberg, Berlin</p>
            <div className="ArtFormsCollection Container SearchingArtForms col-md-4 text-right">
              <button
                type="button"
                className="ArtFormSingle SearchArtForm btn btn-outline-light"
              >
                <p className="ArtFormsText">Water Color</p>
              </button>

              <button
                type="button"
                className="ArtFormSingle SearchArtForm btn btn-outline-light"
              >
                <p className="ArtFormsText">Acrylic</p>
              </button>

              <button
                type="button"
                className="ArtFormSingle SearchArtForm btn btn-outline-light"
              >
                <p className="ArtFormsText">Oil Color</p>
              </button>
            </div>
          </div>
        </Link>
        <div className="Line LineSearchProfiles"></div>
        <div className="Search-Container">
          <img src={Profile6} className="OnlineConnection" alt="" srcset="" />
          <p className="NameAge">Mia Schumann, 22</p>
          <p className="KmAway">3 km away</p>
          <p className="Area">Prenzlauer Berg, Berlin</p>
          <div className="ArtFormsCollection Container SearchingArtForms col-md-4 text-right">
            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Water Color</p>
            </button>

            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Photography</p>
            </button>


          </div>
        </div>
        <div className="Line LineSearchProfiles"></div>
        <div className="Search-Container">
          <img src={Profile8} className="OnlineConnection" alt="" srcset="" />
          <p className="NameAge">Jay Harold, 33</p>
          <p className="KmAway">3.5 km away</p>
          <p className="Area">Kreuzberg, Berlin</p>
          <div className="ArtFormsCollection Container SearchingArtForms col-md-4 text-right">
            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Photography</p>
            </button>
          </div>
        </div>
        <div className="Line LineSearchProfiles"></div>
        <div className="Search-Container">
          <img src={Profile9} className="OnlineConnection" alt="" srcset="" />
          <p className="NameAge">Lia Nowak, 25</p>
          <p className="KmAway">4 km away</p>
          <p className="Area">Mitte, Berlin</p>
          <div className="ArtFormsCollection Container SearchingArtForms col-md-4 text-right">
            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Drawing</p>
            </button>

            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Digital Art</p>
            </button>
          </div>
        </div>
        <div className="Line LineSearchProfiles"></div>

        <div className="Search-Container">
          <img src={Profile5} className="OnlineConnection" alt="" srcset="" />
          <p className="NameAge">Michelle Rosen, 36</p>
          <p className="KmAway">4.1 km away</p>
          <p className="Area">Kreuzberg, Berlin</p>
          <div className="ArtFormsCollection Container SearchingArtForms col-md-4 text-right">
            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Water Color</p>
            </button>

            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Photography</p>
            </button>

            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Acrylic</p>
            </button>

            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Sculpture</p>
            </button>

            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Digital Art</p>
            </button>
          </div>
        </div>
        <div className="Line LineSearchProfiles"></div>
        <div className="Search-Container">
          <img src={Profile10} className="OnlineConnection" alt="" srcset="" />
          <p className="NameAge">Leyla Gotham, 28</p>
          <p className="KmAway">5 km away</p>
          <p className="Area">Charlottenburg, Berlin</p>
          <div className="ArtFormsCollection Container SearchingArtForms col-md-4 text-right">
            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Water Color</p>
            </button>

            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Acrylic</p>
            </button>

            <button
              type="button"
              className="ArtFormSingle SearchArtForm btn btn-outline-light"
            >
              <p className="ArtFormsText">Sculpture</p>
            </button>
          </div>
          <div className="FooterMargins"></div>
        </div>
      </div>
    </div>
  );
}
