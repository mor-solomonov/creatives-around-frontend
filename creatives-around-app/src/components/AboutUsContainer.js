import React from 'react';
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import DisplayTitle from './SymbolsandTitles/DisplayTitle';


const AboutUsContainer = () => {
    return (

        <div className="App-Container">

            <Logo />
            <DisplayTitle title="About us" />
            <p className="aboutus">Creatives Around is a location-based social platform for visual artists.

            The app suggests profiles based on location and art forms.
            Once connected with other users, direct messaging between the users is available and the users are added as friends for future updates in the news feed.

            The idea of the app is to connect with other visual artists, arrange meetups,
            inspire one another by sharing creative works and ideas, initiate collaborations
and see the activities of others.

Our mission is to function as a creative catalyst for visual artists.

To hold space for creatives, from various genres and skill levels, to connect with other creatives nearby locally or in 'travel mode' when abroad.

A place for visual artists to get inspired from others in desired fields, inspire others by sharing your work, discover & communicate exhibitions, initiate collaborations and meetups with other visual artists.</p>

        </div>

    )

};

export default AboutUsContainer;