import React from 'react';
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';

const AboutUsContainer = props => {
  const backClick = () => {
    props.history.go(-1);
  };
  return (
    <div className="App-Container">
      <TitleWithSymbol title="About Us" />
      <Logo />
      <br />
      <p className="aboutus text-center">
        <b>
          Creatives Around is a location-based social platform for visual
          artists.
        </b>
      </p>
      <p className="aboutus">
        Creatives Around location-based social platform for visual artists.
        <br />
        <br />
        The idea of the app is to connect with other visual artists that are in
        your area. The mission of the app is to hold space for visual artists,
        from various fields and levels of skill, to connect - inspire one
        another - and collaborate.
        <br />
        <br />
        The app suggests profiles based on location and art forms. Once the
        connection is confirmed by both sides, direct messaging between the
        users is available and the users are added as a connection.
      </p>

      <button className="btn btn-light" onClick={backClick}>
        Go Back
      </button>
      <div className="FooterMargins"></div>
    </div>
  );
};

export default AboutUsContainer;
