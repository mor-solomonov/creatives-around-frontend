import React, { Fragment, useState } from 'react';
import Slider from 'react-smooth-range-input';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
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

        <form action="" className="locationSettingsForm">
          <h4 className="FormHeader">My Location</h4>
          <input type="text" />
          <img src={LocationPin} className="LocationPin" alt="" />
          <div className="Line"></div>

          <h4 className="FormHeader">My Search Radius</h4>
          <input
            type="range"
            id="rangeBar"
            name="rangeBar"
            min="1"
            max="50"
            value="1"
            onChange={updateState}
          />
          <output type="text" id="rangeKm" name="rangeKm">
            {state.myMinSearchRadius}
          </output>

          <input type="range" class="custom-range" id="customRange1" />

          <Slider value={1} min={1} max={30} />

          <div className="Line"></div>

          <h4 className="FormHeader">Disable Location</h4>
          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round" />
          </label>

          <div className="Line"></div>
          <h4 className="FormHeader">Travel Mode</h4>
          <label class="switch travelSwitch">
            <input type="checkbox" unchecked />
            <span class="slider round" />
          </label>
          <br />
          <input type="text" />
          <img src={LocationPin} className="LocationPin" alt="" />

          <footer>
            <div className="FooterContainerFour">
              <div>
                <img src={CancelLocation} alt="Cancel" id="CancelLocation" />
              </div>

              <div>
                <img src={SaveLocation} alt="Save" id="SaveLocation" />
              </div>
            </div>
          </footer>
        </form>
      </div>
    </Fragment>
  );
};

export default LocationSettingsContainer;
