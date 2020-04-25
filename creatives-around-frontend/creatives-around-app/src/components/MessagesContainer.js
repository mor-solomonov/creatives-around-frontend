import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Profile1 from '../images/fake_profiles/profile_paintrbush_man.png';
import Profile2 from '../images/fake_profiles/profile_2.png';
import Profile3 from '../images/fake_profiles/profile_3.png';
import Profile4 from '../images/fake_profiles/profile_4.png';
import Profile5 from '../images/fake_profiles/profile_5.png';
import Profile6 from '../images/fake_profiles/profile_6.png';

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
                        <img src={Profile1} className="OnlineConnection" alt="" srcset="" />
                        <p>Steve: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus ipsa, sit laudantium ab delectus ea voluptatibus sequi nobis minus consequuntur.</p>

                    </div>
                </div>

            </div>
        </Fragment>
    )

};

export default MessagesContainer;