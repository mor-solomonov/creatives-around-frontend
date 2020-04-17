import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';
import MyProfileImage from '../images/graphs/my_profile_box.svg';
// import ConnectionsImage from '../images/graphs/connections_box.svg';
import LocationSettingsImage from '../images/graphs/location_settings_box.svg';
import ContactUsImage from '../images/graphs/contact_us_box.svg';
import { Link } from 'react-router-dom';
import DeleteAccountImage from '../images/graphs/delete_account_box.svg';
import AboutUsImage from '../images/graphs/about_us_box.svg';
const Settings = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Settings" />
                <Logo />
                <div className="Settings-Buttons">
                    <div>
                        <Link style={{ textDecoration: 'none' }} to='/setupprofile'><img src={MyProfileImage} className="Settings-Buttons" alt="MyProfileImage" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/locationsettings'><img src={LocationSettingsImage} className="Settings-Buttons" alt="LocationSettingsImage" /></Link>
                        <Link style={{ textDecoration: 'none' }} to="/contactus"> <img src={ContactUsImage} className="Settings-Buttons" alt="ContactUsImage" /></Link>
                    </div>
                    <div>
                        <Link style={{ textDecoration: 'none' }} to='/deleteaccount'><img src={DeleteAccountImage} className="App-Settings-Buttons" alt="DeleteAccountImage" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/aboutus'><img src={AboutUsImage} className="Settings-Buttons" alt="AboutUsImage" /> </Link>


                    </div>

                </div>
            </div>

        </Fragment>
    )

};

export default Settings;