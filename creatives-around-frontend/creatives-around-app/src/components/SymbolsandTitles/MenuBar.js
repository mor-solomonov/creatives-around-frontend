import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
// Graphics:
import SettingsSymbol from '../../images/graphs/menu_bars.svg';
import ConnectionsSymbol from '../../images/graphs/connections.svg';
import MessagesSymbol from '../../images/graphs/envelope.svg';
import SearchSymbol from '../../images/graphs/search.svg';

const MenuBar = () => {
  return (
    <div className="MenuBar">
      <Link to="/searchprofiles" className="MenuMargins">
        <img
          className="SearchSymbol MenuIcon"
          src={SearchSymbol}
          alt="SearchSymbol"
        />
      </Link>

      <Link to="/messages" className="MenuMargins">
        <img
          className="MessagesSymbol MenuIcon"
          src={MessagesSymbol}
          alt="MessagesSymbol"
        />
      </Link>

      <Link to="/connections" className="MenuMargins">
        <img
          className="ConnectionsSymbol MenuIcon"
          src={ConnectionsSymbol}
          alt="ConnectionsSymbol"
        />
      </Link>

      <Link to="/settings" className="SettingsLink">
        <img
          className="SettingsSymbol MenuIcon"
          src={SettingsSymbol}
          alt="SettingsSymbol"
        />
      </Link>
    </div>
  );
};
export default MenuBar;
