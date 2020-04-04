import React from 'react';
import LogoImage from "../images/ca_logo_white.svg"
import '../styles/App.css'

export default function Logo() {
    return (
        <div className="Logo">
            <img src={LogoImage} alt="Logo" />
            <p className="App-title">- connect with creatives nearby -</p>
        </div>
    )
}
