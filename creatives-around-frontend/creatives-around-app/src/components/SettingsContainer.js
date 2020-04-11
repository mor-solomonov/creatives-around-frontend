import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';
import MyProfileImage from '../images/graphs/my_profile_box.svg';
import ConnectionsImage from '../images/graphs/connections_box.svg';
import LocationSettingsImage from '../images/graphs/location_settings_box.svg';
import AppSettingsImage from '../images/graphs/app_settings_box.svg';

const Settings = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Settings" />
                <Logo />
                <div className="Settings-Buttons">
                    <div>
                        <img src={MyProfileImage} className="Settings-Buttons" alt="MyProfileImage" />
                        <img src={ConnectionsImage} className="Settings-Buttons" alt="DConnectionsImage" />
                    </div>
                    <div>
                        <img src={LocationSettingsImage} className="Settings-Buttons" alt="LocationSettingsImage" />
                        <img src={AppSettingsImage} className="Settings-Buttons" alt="AppSettingsImage" />
                    </div>
                </div>
            </div>

        </Fragment>
    )

};

export default Settings;