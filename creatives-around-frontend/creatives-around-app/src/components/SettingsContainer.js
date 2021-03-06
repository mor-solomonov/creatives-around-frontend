import React, { Fragment } from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';
import MyProfileImage from '../images/graphs/my_profile_box.svg';
import LocationSettingsImage from '../images/graphs/location_settings_box.svg';
import ContactUsImage from '../images/graphs/contact_us_box.svg';
import { Link } from 'react-router-dom';
import DeleteAccountImage from '../images/graphs/delete_account.svg';
import AboutUsImage from '../images/graphs/about_us_box.svg';
import LogOutImage from '../images/graphs/log_out.svg';
const Settings = () => {
  return (
    <Fragment>
      <div className="App-Container">
        <TitleWithSymbol title="Settings" />
        <Logo />
        <div className="Settings-Buttons text-center">
          <div>
            <Link style={{ textDecoration: 'none' }} to="/viewmyprofile">
              <img
                src={MyProfileImage}
                className="Settings-Buttons"
                alt="MyProfileImage"
              />
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/locationsettings">
              <img
                src={LocationSettingsImage}
                className="Settings-Buttons"
                alt="LocationSettingsImage"
              />
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none' }} to="/aboutus">
              <img
                src={AboutUsImage}
                className="Settings-Buttons"
                alt="AboutUsImage"
              />{' '}
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/contactus">
              {' '}
              <img
                src={ContactUsImage}
                className="Settings-Buttons"
                alt="ContactUsImage"
              />
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none' }} to="/deleteaccount">
              <img
                src={DeleteAccountImage}
                className="Settings-Buttons"
                alt="DeleteAccountImage"
              />
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
              <img
                src={LogOutImage}
                className="Settings-Buttons"
                alt="LogOutImage"
              />{' '}
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
