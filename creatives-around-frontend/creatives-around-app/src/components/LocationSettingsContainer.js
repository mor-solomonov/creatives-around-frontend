import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import DisplayTitle from './SymbolsandTitles/DisplayTitle';
// Graphics:
import LocationPin from '../images/graphs/location_pin.svg';
import CancelLocation from '../images/graphs/cancel_text.svg';
import SaveLocation from '../images/graphs/save_text.svg';

//? NOTE TO SELF:
//? My location (string + location logo button)
//? My search radius (bar > numbers)
//? Disable location (radio button)
//? Travel Mode (radio button + string)
//? Buttons footer: Cancel / Save (look at setupprofile)
//? HR-lines (look at messages)

const LocationSettingsContainer = () => {
  const [state, setState] = useState({
    myMinSearchRadius: 1
  });
  const updateState = e => {
    console.log('VALUE', e.target.value);
    console.log('NAME', e.target.name);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="App-Container">
        <TitleWithSymbol title="Location Settings" />

        <DisplayTitle title="Set your location" />
        <form action="" className="locationSettingsForm">
          <h4 className="FormHeader">My Location</h4>
          <input type="text" />
          <img src={LocationPin} className="LocationPin" alt="" />
          <div className="Line"></div>

          <h4 className="FormHeader">My Search Radius</h4>
          <input
            type="range"
            id="rangeBar"
            className="mySearchRadius"
            name="myMinSearchRadius"
            min="1"
            max="50"
            value={state.myMinSearchRadius}
            onChange={updateState}
          />
          <output type="text" id="rangeKm" name="rangeKm">
            {state.myMinSearchRadius}km
          </output>
          {/* 
          <input type="range" class="custom-range" id="customRange1" /> */}

          {/* <Slider value={1} min={1} max={30} /> */}

          <div className="Line"></div>
          <div className="LocationSwitchesContainer">
            <div className="LocationSwitch">
              <h4 className="FormHeader SwitchHeader">Disable Location</h4>
              <label class="switch">
                <input type="checkbox" unchecked />
                <span class="slider round" />
              </label>
            </div>

            <div className="LocationSwitch">
              <h4 className="FormHeader SwitchHeader">Travel Mode</h4>
              <label class="switch travelSwitch">
                <input type="checkbox" unchecked />
                <span class="slider round" />
              </label>
            </div>
          </div>

          <h4 className="FormHeader">My travel location</h4>
          <input type="text" />
          <img src={LocationPin} className="LocationPin" alt="" />

          <footer className="LocationFooter">
            <div>
              <Link to="/settings">
                <button className="btn btn-light location">Go back</button>
              </Link>
              <Link to="/settings">
                <button className="btn btn-light location">Save</button>
              </Link>
            </div>
            {/* <div className="FooterContainerFour">
              <div>
                <img src={CancelLocation} alt="Cancel" id="CancelLocation" />
              </div>

              <div>
                <img src={SaveLocation} alt="Save" id="SaveLocation" />
              </div>
            </div> */}
          </footer>
        </form>
      </div>
    </Fragment>
  );
};

export default LocationSettingsContainer;
