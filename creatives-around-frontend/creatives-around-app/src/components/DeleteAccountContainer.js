import React, { Fragment } from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from '../components/SymbolsandTitles/Logo';
import { Link } from 'react-router-dom';

const DeleteAccountContainer = () => {
  return (
    <Fragment>
      <div className="App-Container ">
        <TitleWithSymbol title="" />
        <Logo />

        <div className="form-group text-center">
          <form className="DeleteAccountform text-center">
            <label for="FormControlTextarea" className="FormControlTextarea">
              Why would you like to delete your account?
            </label>
            <textarea class="form-control TextAreaPurple" rows="4"></textarea>
            <input id="checkbox" type="checkbox" name="deleteaccount" />
            <label className="delete-account-checkbox">
              &nbsp;Delete my account
            </label>
            <div className="text-center MarginButtons">
              <Link to="/accountdeleted">
                {' '}
                <button
                  type="submit"
                  className="DeleteAccountButton btn btn btn-light mb-4"
                >
                  Delete Account
                </button>
              </Link>
              <Link className="text-decoration-none" to="/settings">
                {' '}
                <button className="DeleteAccountButton btn btn-light mb-4">
                  Go Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default DeleteAccountContainer;
