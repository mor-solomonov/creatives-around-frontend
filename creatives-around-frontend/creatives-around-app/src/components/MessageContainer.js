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
        <form action="" className="SearchConnections">
          <input type="text" />
          <button>Search</button>
        </form>
        <div className="Messages-Container">
          <div className="Message-Container">
            <p>
              <b>Steve:&nbsp; </b>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente necessitatibus ipsa, sit laudantium ab
              delectus ea voluptatibus sequi nobis minus consequuntur.
            </p>
            <img src={Profile1} className="OnlineConnection" alt="" srcset="" />
          </div>
          <div className="Message-Container Receiver">
            <img src={Profile9} className="OnlineConnection" alt="" srcset="" />
            <p>
              <b>Lia:&nbsp;</b> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente necessitatibus ipsa, sit laudantium ab
              delectus ea voluptatibus{' '}
            </p>
          </div>
          <div className="Message-Container">
            <p>
              <b>Steve:&nbsp; </b>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi nobis minus consequuntur.
            </p>
            <img src={Profile1} className="OnlineConnection" alt="" srcset="" />
          </div>
          <div className="Message-Container">
            <img src={Profile9} className="OnlineConnection" alt="" srcset="" />
            <p>
              <b>Lia:&nbsp;</b> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.sit amet consectetur adipisicing.{' '}
            </p>
          </div>
          <div className="Message-Container">
            <p>
              <b>Steve:&nbsp; </b>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi nobis minus consequuntur.
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
