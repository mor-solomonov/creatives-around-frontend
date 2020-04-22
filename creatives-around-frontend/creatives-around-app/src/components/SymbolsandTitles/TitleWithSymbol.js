import React, { Fragment } from 'react';
import LogoSymbolImage from '../../images/ca_symbol_white.svg';
import '../../styles/App.css';
import MenuBar from './MenuBar.js';

const TitleWithSymbol = props => {
  return (
    <Fragment>
      <div className="Navbar">
        <div className="TitleWithSymbol">
          <img className="LogoSymbol" src={LogoSymbolImage} alt="LogoSymbol" />
          <h3 className="PageHeader">{props.title}</h3>
        </div>

        <MenuBar />
      </div>
    </Fragment>
  );
};
export default TitleWithSymbol;
