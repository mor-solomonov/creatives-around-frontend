import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from '../components/SymbolsandTitles/Logo';
import { Link } from 'react-router-dom';

const DeleteAccountContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Delete Account" />
                <Logo />

                <div class="form-group">
                    <form>
                        <label for="FormControlTextarea" className="FormControlTextarea">Why would you like to delete your account? (optional)</label>
                        <textarea class="form-control DeleteAccountform" rows="4"></textarea>
                        <div className="text-center MarginButtons">

                            <button type="submit" className="btn btn btn-light mb-4 btn-block">Delete Account</button>
                            <Link className="text-decoration-none" to="/appsettings"> <button className="DeleteAccountbtn btn btn-light mb-4 btn-block">Go Back</button></Link>
                        </div>



                    </form>

                </div>
            </div>


        </Fragment>
    )

};

export default DeleteAccountContainer;