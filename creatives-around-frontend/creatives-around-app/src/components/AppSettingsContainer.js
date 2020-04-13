import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';
import AboutUsImage from '../images/graphs/about_us_box.svg';
import DeleteAccountImage from '../images/graphs/delete_account_box.svg';
import TermsImage from '../images/graphs/terms_conditions_box.svg';
import ContactUsImage from '../images/graphs/contact_us_box.svg';
import { Link } from 'react-router-dom';
import BarsMenu from '../images/graphs/menu_bars.svg';

const AppSettingsContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="App Settings" />
                <Logo />
                {/* <div className="text-right">
                    <img src={BarsMenu} className="BarsMenu" alt="BarsMenu" />
                </div> */}
                <div className="App-Settings-Buttons">
                    <div>
                        <Link style={{ textDecoration: 'none' }} to='/aboutus'><img src={AboutUsImage} className="App-Settings-Buttons" alt="AboutUsImage" /> </Link>
                        <Link style={{ textDecoration: 'none' }} to='/deleteaccount'><img src={DeleteAccountImage} className="App-Settings-Buttons" alt="DeleteAccountImage" /></Link>
                    </div>
                    <div>
                        <Link style={{ textDecoration: 'none' }} to="/termsandconditions"><img src={TermsImage} className="App-Settings-Buttons" alt="TermsImage" /></Link>
                        <Link style={{ textDecoration: 'none' }} to="/contactus"> <img src={ContactUsImage} className="App-Settings-Buttons" alt="ContactUsImage" /></Link>
                    </div>
                </div>
            </div>

        </Fragment>
    )

};

export default AppSettingsContainer;