import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
// Graphics:
import SettingsSymbol from '../../images/graphs/menu_bars.svg';
import ConnectionsSymbol from '../../images/graphs/connections.svg';

const MenuBar = () => {
    return (
        <div className="MenuBar">
            {/* <Link to="/searchprofiles">
                <img className="SearchSymbol" src={SearchSymbol} alt="SearchSymbol" />
            </Link> */}

            {/* <Link to="/messages">
                <img className="MessagesSymbol" src={MessagesSymbol} alt="MessagesSymbol" />
            </Link> */}

            <Link to="/connections">
                <img className="ConnectionsSymbol" src={ConnectionsSymbol} alt="ConnectionsSymbol" />
            </Link>

            <Link to="/settings">
                <img className="SettingsSymbol" src={SettingsSymbol} alt="SettingsSymbol" />
            </Link>
            
        </div>
    )
};
export default MenuBar;