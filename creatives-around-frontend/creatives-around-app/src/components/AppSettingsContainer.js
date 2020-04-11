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
                <div className="App-Settings-Buttons">
                    <div>
                        <img src={AboutUsImage} className="App-Settings-Buttons" alt="AboutUsImage" />
                        <img src={DeleteAccountImage} className="App-Settings-Buttons" alt="DeleteAccountImage" />
                    </div>
                    <div>
                        <img src={TermsImage} className="App-Settings-Buttons" alt="TermsImage" />
                        <img src={ContactUsImage} className="App-Settings-Buttons" alt="ContactUsImage" />
                    </div>
                </div>
            </div>

        </Fragment>
    )

};

export default AppSettingsContainer;