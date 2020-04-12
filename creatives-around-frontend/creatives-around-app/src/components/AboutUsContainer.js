import React from 'react';
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import GoBackButton from './ButtonsAndCheckBoxs/GoBackButton';
import { Link } from 'react-router-dom';

const AboutUsContainer = () => {
    return (

        <div className="App-Container">
            <TitleWithSymbol title="About Us" />
            <Logo />
            <br />
            <p className="aboutus"><b>Creatives Around is a location-based social platform for visual artists.</b>
                <br /><br />
                The app suggests profiles based on location and art forms.
                Once connected with other users, direct messaging between the users is available and the users are added as friends for future updates in the news feed.
                <br />
                The idea of the app is to connect with other visual artists, arrange meetups,
                inspire one another by sharing creative works and ideas, initiate collaborations
                and see the activities of others.
                <br />
                Our mission is to function as a creative catalyst for visual artists,
                to hold space for creatives from various genres and skill levels and to connect with other creatives nearby locally or in 'travel mode' when abroad.
                <br />
                Creatives Around is a place for visual artists to get inspired from others in desired fields, inspire others by sharing your work, discover & communicate exhibitions, initiate collaborations and meetups with other visual artists.</p>
            <Link to="/appsettings"><GoBackButton /></Link>
        </div>


    )

};

export default AboutUsContainer;