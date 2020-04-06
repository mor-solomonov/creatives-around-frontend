import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from './components/LoginContainer';
import SignUpContainer from './components/SignUpContainer';
import TermsAndConditions from './components/TermsContainer'
import SetupProfile from './components/SetupProfileContainer'
import SearchArtForms from './components/SearchArtFormsContainer';
import SearchProfiles from './components/SearchProfilesContainer'
import Settings from './components/SettingsContainer';
import Connections from './components/ConnectionsContainer';
import Chat from './components/ChatContainer';
import LocationSettings from './components/LocationSettingsContainer';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route exact path="/termsandconditions" component={TermsAndConditions} />
      <Route exact path="/setupprofile" component={SetupProfile} />
      <Route exact path="/searchartforms" component={SearchArtForms} />
      <Route exact path="/searchprofiles" component={SearchProfiles} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/connections" component={Connections} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/locationsettings" component={LocationSettings} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
