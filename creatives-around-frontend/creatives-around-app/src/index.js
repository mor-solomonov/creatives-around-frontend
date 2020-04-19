import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
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
import Messages from './components/MessagesContainer';
import FriendReqSent from './components/FriendReqSentContainer';
import ContactUs from './components/ContactUsContainer';
import DeleteAccount from './components/DeleteAccountContainer';
import AccountDeleted from './components/AccoutDeletedContainer';
import ViewMyProfileContainer from './components/ViewMyProfileContainer';
import MyArtForms from './components/MyArtFormsContainer';
import MustHavaAProfileContainer from './components/MustHaveAProfileContainer';
import MyGallery from './components/MyGalleryContainer';
import AnotherUserGallery from './components/AnotherUserGalleryContainer';
import ActivationKeySent from './components/ActivationKeySentContainer';
import ProfileOfAnotherUserContainer from './components/ProfileOfAnotherUserContainer';
import AboutUsContainer from './components/AboutUsContainer';


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
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/friendreqsent" component={FriendReqSent} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/deleteaccount" component={DeleteAccount} />
      <Route exact path="/aboutus" component={AboutUsContainer} />
      <Route exact path="/accountdeleted" component={AccountDeleted} />
      <Route exact path="/viewmyprofile" component={ViewMyProfileContainer} />
      <Route exact path="/myartforms" component={MyArtForms} />
      <Route exact path="/profileofanotheruser" component={ProfileOfAnotherUserContainer} />
      <Route exact path="/youneedtohaveaprofile" component={MustHavaAProfileContainer} />
      <Route exact path="/mygallery" component={MyGallery} />
      <Route exact path="/anotherusergallery" component={AnotherUserGallery} />
      <Route exact path="/activationkeysent" component={ActivationKeySent} />
      <Route exact path="/accountdeleted" component={AccountDeleted} />

    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
