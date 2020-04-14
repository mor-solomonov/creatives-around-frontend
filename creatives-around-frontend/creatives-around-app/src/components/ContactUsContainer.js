import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';
import { Link } from 'react-router-dom';


const ContactUsContainer = () => {
    return (
        <div className="App-Container">
            <TitleWithSymbol title="Contact Us" />
            <Logo />

            <div class="form-group">
                <form>
                    <label for="FormControlTextarea" className="FormControlTextarea">Please write your message here:</label>
                    <textarea class="form-control Contactusform" rows="4"></textarea>
                    <div className="text-center MarginButtons">

                        <button type="submit" className=" btn btn-light mb-4 btn-block">Send message</button>
                        <Link className="text-decoration-none" to="/appsettings"> <button className=" btn btn-light mb-4 btn-block">Go Back</button></Link>
                    </div>



                </form>

            </div>
        </div>

    )

};

export default ContactUsContainer;