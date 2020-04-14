import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
// Images - Profiles for testing:
import Profile1 from '../images/fake_profiles/profile_paintrbush_man.png';
import Profile2 from '../images/fake_profiles/profile_2.png';
import Profile3 from '../images/fake_profiles/profile_3.png';
import Profile4 from '../images/fake_profiles/profile_4.png';
import Profile5 from '../images/fake_profiles/profile_5.png';
import Profile6 from '../images/fake_profiles/profile_6.png';
import Profile7 from '../images/fake_profiles/profile_7.png';
import Profile8 from '../images/fake_profiles/profile_8.png';
import Profile9 from '../images/fake_profiles/profile_9.png';
import Profile10 from '../images/fake_profiles/profile_10.png';
import Profile11 from '../images/fake_profiles/profile_11.png';


const ConnectionsContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                <TitleWithSymbol title="Connections" />
                
                {/* SEARCH: - Needs to be fixed */}
                <form action="" className="SearchConnections">
                    <input type="text"/>
                    <button>Search</button>
                </form>

                {/* CONNECTIONS CONTAINER: */}
                <div className="ConnectionsContainer">
                    <div className="ConnectionSingle">
                        <img src={Profile1} className="OnlineConnection" alt="" srcset=""/>
                        <p>Steve</p>
                        <p>Bloom</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile2} className="OnlineConnection" alt="" srcset=""/>
                        <p>Robert</p>
                        <p>Willis</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile3} className="OnlineConnection" alt="" srcset=""/>
                        <p>Leandro</p>
                        <p>Müllheimer</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile4} className="OnlineConnection" alt="" srcset=""/>
                        <p>Karol</p>
                        <p>Lichtkopf</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile5} alt="" srcset=""/>
                        <p>Eva</p>
                        <p>Nostrovia</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile6} alt="" srcset=""/>
                        <p>Natalia</p>
                        <p>Polanski</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile7} alt="" srcset=""/>
                        <p>Richard</p>
                        <p>Pepperman</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile8} alt="" srcset=""/>
                        <p>Edward</p>
                        <p>Moss</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile9} alt="" srcset=""/>
                        <p>Louisa</p>
                        <p>Svenson</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile10} alt="" srcset=""/>
                        <p>Kelly</p>
                        <p>Clark</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile11} alt="" srcset=""/>
                        <p>Rachel</p>
                        <p>Nothingham</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile1} className="OnlineConnection" alt="" srcset=""/>
                        <p>Steve</p>
                        <p>Bloom</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile2} className="OnlineConnection" alt="" srcset=""/>
                        <p>Robert</p>
                        <p>Willis</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile3} className="OnlineConnection" alt="" srcset=""/>
                        <p>Leandro</p>
                        <p>Müllheimer</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile4} className="OnlineConnection" alt="" srcset=""/>
                        <p>Karol</p>
                        <p>Lichtkopf</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile5} alt="" srcset=""/>
                        <p>Eva</p>
                        <p>Nostrovia</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile6} alt="" srcset=""/>
                        <p>Natalia</p>
                        <p>Polanski</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile7} alt="" srcset=""/>
                        <p>Richard</p>
                        <p>Pepperman</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile8} alt="" srcset=""/>
                        <p>Edward</p>
                        <p>Moss</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile9} alt="" srcset=""/>
                        <p>Louisa</p>
                        <p>Svenson</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile10} alt="" srcset=""/>
                        <p>Kelly</p>
                        <p>Clark</p>
                    </div>
                    <div className="ConnectionSingle">
                        <img src={Profile11} alt="" srcset=""/>
                        <p>Rachel</p>
                        <p>Nothingham</p>
                    </div>
                </div>

            </div>
        </Fragment>
    )

};

export default ConnectionsContainer;