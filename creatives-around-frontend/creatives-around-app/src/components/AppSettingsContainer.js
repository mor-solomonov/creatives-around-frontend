import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';
import AboutUsImage from '../images/graphs/about_us_box.svg';
import DeleteAccountImage from '../images/graphs/delete_account_box.svg';
import TermsImage from '../images/graphs/terms_conditions_box.svg';
import ContactUsImage from '../images/graphs/contact_us_box.svg';

const AppSettingsContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="App Settings" />
                <Logo />
                <div className="About-Us-Buttons">
                    <div>
                        <img src={AboutUsImage} className="App-Settings-Button" alt="AboutUsImage" />
                        <img src={DeleteAccountImage} className="App-Settings-Button" alt="DeleteAccountImage" />
                    </div>
                    <div>
                        <img src={TermsImage} className="App-Settings-Button" alt="TermsImage" />
                        <img src={ContactUsImage} className="App-Settings-Button" alt="ContactUsImage" />
                    </div>
                </div>
            </div>

        </Fragment>
    )

};

export default AppSettingsContainer;