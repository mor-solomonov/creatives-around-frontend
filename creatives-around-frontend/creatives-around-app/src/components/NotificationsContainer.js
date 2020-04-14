import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Logo from './SymbolsandTitles/Logo';
import MessagesImage from '../images/graphs/messages_box.svg'
import ConnectionsImage from '../images/graphs/connections_box.svg'
import { Link } from 'react-router-dom';

const NotificationsContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Notifications" />
                <Logo />

                <div className="App-Settings-Buttons">

                    <Link style={{ textDecoration: 'none' }} to='/messages'><img src={MessagesImage} className="App-Settings-Buttons" alt="MessagesImage" /> </Link>
                    <Link style={{ textDecoration: 'none' }} to='/connections'><img src={ConnectionsImage} className="App-Settings-Buttons" alt="ConnectionsImage" /></Link>
                </div>
            </div>
        </Fragment>
    )

};

export default NotificationsContainer;