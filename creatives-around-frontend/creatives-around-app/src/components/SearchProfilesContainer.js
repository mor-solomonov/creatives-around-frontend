import React, { Fragment } from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import RemoveWhiteCircle from '../images/graphs/remove_white_circle.svg';
//Fake profiles:
import Profile2 from '../images/fake_profiles/profile_2.png';
import Profile3 from '../images/fake_profiles/profile_3.png';
import Profile4 from '../images/fake_profiles/profile_4.png';
import Profile5 from '../images/fake_profiles/profile_5.png';
import Profile6 from '../images/fake_profiles/profile_6.png';

export default function SearchProfilesContainer() {
  return (
    <Fragment>
      <div className="App-Container">
        <TitleWithSymbol title="Search" />
        <form action="" className="SearchConnections">
          <input type="text" />
          <button>Search</button>
        </form>

        <div className="Search-Container">
          <img src={Profile2} className="OnlineConnection" alt="" srcset="" />
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
        {/* ///////////////////////////////////////////////////////// */}
        <div className="Messages-Container">
          <div className="Line"></div>
          <div className="Message-Container">
            <img src={Profile2} className="OnlineConnection" alt="" srcset="" />
            <p>
              Steve: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente necessitatibus ipsa, sit laudantium ab delectus ea
              voluptatibus sequi nobis minus consequuntur.
            </p>
          </div>
          <div className="Line"></div>
          <div className="Message-Container">
            <img src={Profile3} className="OnlineConnection" alt="" srcset="" />
            <p>
              Liroy: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente necessitatibus ipsa, sit laudantium ab delectus ea
              voluptatibus sequi nobis minus consequuntur.
            </p>
          </div>
          <div className="Line"></div>
          <div className="Message-Container">
            <img src={Profile4} className="OnlineConnection" alt="" srcset="" />
            <p>
              Max: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente necessitatibus ipsa, sit laudantium ab delectus ea
              voluptatibus sequi nobis minus consequuntur.
            </p>
          </div>
          <div className="Line"></div>
          <div className="Message-Container">
            <img src={Profile5} className="OnlineConnection" alt="" srcset="" />
            <p>
              Max: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente necessitatibus ipsa, sit laudantium ab delectus ea
              voluptatibus sequi nobis minus consequuntur.
            </p>
          </div>
          <div className="Line"></div>
          <div className="Message-Container">
            <img src={Profile6} className="OnlineConnection" alt="" srcset="" />
            <p>
              Max: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente necessitatibus ipsa, sit laudantium ab delectus ea
              voluptatibus sequi nobis minus consequuntur.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
