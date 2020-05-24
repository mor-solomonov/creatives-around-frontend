import React from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';
import { Link } from 'react-router-dom';

const ContactUsContainer = () => {
  return (
    <div className="App-Container">
      <TitleWithSymbol title="Contact Us" />
      <Logo />

      <div className="form-group">
        <form className="contactForm">
          <label for="FormControlTextarea" className="FormControlTextarea">
            Please write your message here:
          </label>
          <textarea className="form-control TextAreaPurple" rows="4"></textarea>
          <div className="text-center MarginButtons">
            <button type="submit" className="btn btn-light mb-4">
              Send message
            </button>
            <Link className="text-decoration-none" to="/settings">
              {' '}
              <button className="btn btn-light mb-4 GoBackContactUs">
                Go Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsContainer;
