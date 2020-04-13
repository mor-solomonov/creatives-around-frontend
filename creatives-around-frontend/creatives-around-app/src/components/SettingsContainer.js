import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';
import MyProfileImage from '../images/graphs/my_profile_box.svg';
import ConnectionsImage from '../images/graphs/connections_box.svg';
import LocationSettingsImage from '../images/graphs/location_settings_box.svg';
import AppSettingsImage from '../images/graphs/app_settings_box.svg';
import { Link } from 'react-router-dom';


const Settings = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Settings" />
                <Logo />
                <div className="Settings-Buttons">
                    <div>
                        <Link style={{ textDecoration: 'none' }} to='/setupprofile'><img src={MyProfileImage} className="Settings-Buttons" alt="MyProfileImage" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/connections'><img src={ConnectionsImage} className="Settings-Buttons" alt="DConnectionsImage" /></Link>
                    </div>
                    <div>
                        <Link style={{ textDecoration: 'none' }} to='/locationsettings'><img src={LocationSettingsImage} className="Settings-Buttons" alt="LocationSettingsImage" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/appsettings'> <img src={AppSettingsImage} className="Settings-Buttons" alt="AppSettingsImage" /></Link>
                    </div>
                </div>
            </div>

        </Fragment>
    )

};

export default Settings;