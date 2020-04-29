import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Profile9 from '../images/fake_profiles/profile_9.png';
import Profile2 from '../images/fake_profiles/profile_2.png';
import Profile3 from '../images/fake_profiles/profile_3.png';
import Profile4 from '../images/fake_profiles/profile_4.png';
import Profile5 from '../images/fake_profiles/profile_5.png';
import Profile6 from '../images/fake_profiles/profile_6.png';
import { Link } from 'react-router-dom';

const MessagesContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Messages" />
                <form action="" className="SearchConnections">
                    <input type="text" />
                    <button>Search</button>
                </form>
                <div className="Messages-Container">
                    <div className="Message-Container">

                        <img src={Profile9} className="OnlineConnection" alt="" srcset="" />
                        <p className="messageNoStyle"><Link className="messageNoStyle" to="/message"><b>Lia:&nbsp; </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus ipsa, sit laudantium ab delectus ea voluptatibus sequi nobis minus consequuntur.</Link></p>

                    </div>
                    <div className="Line"></div>
                    <div className="Message-Container">
                        <img src={Profile2} className="OnlineConnection" alt="" srcset="" />
                        <p><b>Steve:&nbsp;</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                    </div>
                    <div className="Line"></div>
                    <div className="Message-Container">
                        <img src={Profile3} className="OnlineConnection" alt="" srcset="" />
                        <p><b>Liroy:&nbsp;</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus ipsa, sit laudantium ab delectus ea voluptatibus sequi nobis minus consequuntur.</p>

                    </div>
                    <div className="Line"></div>
                    <div className="Message-Container">
                        <img src={Profile4} className="OnlineConnection" alt="" srcset="" />
                        <p><b>Max:&nbsp;</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="Line"></div>
                    <div className="Message-Container">
                        <img src={Profile5} className="OnlineConnection" alt="" srcset="" />
                        <p><b>Anja:&nbsp;</b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus ipsa, sit laudantium ab delectus ea voluptatibus sequi nobis minus consequuntur.</p>
                    </div>
                    <div className="Line"></div>
                    <div className="Message-Container">
                        <img src={Profile6} className="OnlineConnection" alt="" srcset="" />
                        <p><b>Christina:&nbsp;</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>




                </div>
                <div className="FooterMargins"></div>
            </div>
        </Fragment>
    )

};

export default MessagesContainer;