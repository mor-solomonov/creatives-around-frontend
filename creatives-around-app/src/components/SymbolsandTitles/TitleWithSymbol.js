import React from 'react';
import LogoSymbolImage from '../../images/ca_symbol_white.svg';
import '../../styles/App.css';

const TitleWithSymbol = (props) => {
    return (
        <div className="TitleWithSymbol">
            <img className="LogoSymbol" src={LogoSymbolImage} alt="LogoSymbol" />
            <h3 className="PageHeader">{props.title}</h3>
        </div>
    )
};
export default TitleWithSymbol;