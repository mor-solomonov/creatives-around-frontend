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
import NotificationsContainer from './components/NotificationsContainer';
import AppSettings from './components/AppSettingsContainer';
import ContactUs from './components/ContactUsContainer';
import DeleteAccount from './components/DeleteAccountContainer';
import AboutUs from './components/AboutUsContainer';
import AccountDeleted from './components/AccoutDeletedContainer';
import MyProfile from './components/ViewMyProfile';
import MyArtForms from './components/MyArtFormsContainer';
import ProfileOfAnotherUser from './components/ProfileofanotheruserContainer'
import YouNeedToHavaAProfile from './components/YouNeedToHaveAProfile';
import MyGallery from './components/MyGalleryContainer';
import AnotherUserGallery from './components/AnotherUserGalleryContainer';
import ActivationKeySent from './components/ActivationKeySentContainer';


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
      <Route exact path="/notifications" component={NotificationsContainer} />
      <Route exact path="/appsettings" component={AppSettings} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/deleteaccount" component={DeleteAccount} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/accountdeleted" component={AccountDeleted} />
      <Route exact path="/myprofile" component={MyProfile} />
      <Route exact path="/myartforms" component={MyArtForms} />
      <Route exact path="/profileofanotheruser" component={ProfileOfAnotherUser} />
      <Route exact path="/youneedtohaveaprofile" component={YouNeedToHavaAProfile} />
      <Route exact path="/mygallery" component={MyGallery} />
      <Route exact path="/anotherusergallery" component={AnotherUserGallery} />
      <Route exact path="/activationlinksent" component={ActivationKeySent} />


    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
