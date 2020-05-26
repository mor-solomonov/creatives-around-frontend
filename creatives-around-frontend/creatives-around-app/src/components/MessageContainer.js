import React, { Fragment } from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Profile1 from '../images/fake_profiles/profile_paintrbush_man.png';
import Profile9 from '../images/fake_profiles/profile_9.png';

const MessageContainer = () => {
  return (
    <Fragment>
      <div className="App-Container">
        <TitleWithSymbol title="Message" />
        {/* <form action="" className="SearchConnections">
          <input type="text" />
          <button>Search</button>
        </form> */}
        <div className="Messages-Container">
          <div className="Message-Container Receiver">
            <img src={Profile9} className="OnlineConnection" alt="" srcset="" />
            <p>
              <b>Lia:&nbsp;</b> Hey Steve, I really like your work, and it
              reminded me of an exhibition I saw in Venice last summer from Ivan
              Heroché.
            </p>
          </div>
          <div className="Message-Container">
            <p>
              <b>Steve:&nbsp; </b>Ah! Nice! I really like his perspective and
              style. I saw your paintings, and it seems like we could connect
              and possibly collaborate on an art piece together? Feel like
              meeting for a cup of tee?
            </p>
            <img src={Profile1} className="OnlineConnection" alt="" srcset="" />
          </div>
          <div className="Message-Container Receiver">
            <img src={Profile9} className="OnlineConnection" alt="" srcset="" />
            <p>
              <b>Lia:&nbsp;</b>Yeah, let's do that. Do you know Mano Café, next
              to Görlitzer Bahnhof?
            </p>
          </div>
          <div className="Message-Container">
            <p>
              <b>Steve:&nbsp; </b>Sure! I've been there before. How about
              Saturday at 15?
            </p>
            <img src={Profile1} className="OnlineConnection" alt="" srcset="" />
          </div>
          <div className="Message-Container">
            <img src={Profile9} className="OnlineConnection" alt="" srcset="" />
            <p>
              <b>Lia:&nbsp;</b>That sounds good to me! I'll bring my laptop so I
              can show you what I am working on right now.
            </p>
          </div>
          <div className="Message-Container">
            <p>
              <b>Steve:&nbsp; </b>Cool, I'll bring my laptop too. And if you
              would be up for it, my friend has an exhibition nearby Mano. See u
              then. :)
            </p>

            <img src={Profile1} className="OnlineConnection" alt="" srcset="" />
          </div>
          <div id="WriteSend">
            <input
              type="text"
              className="form-control mb-4"
              id="WriteMessage"
            />
            <button className="Loginbutton btn btn-light" id="SendMessage">
              Send
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MessageContainer;
