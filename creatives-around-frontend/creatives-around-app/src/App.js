import React from 'react';
import { Route, HashRouter, withRouter } from 'react-router-dom';
import LoginPage from './components/LoginContainer';
import SignUpContainer from './components/SignUpContainer';
import TermsAndConditions from './components/TermsContainer';
import SetupProfile from './components/SetupProfileContainer';
import SearchArtForms from './components/SearchArtFormsContainer';
import SearchProfiles from './components/SearchProfilesContainer';
import Settings from './components/SettingsContainer';
import Connections from './components/ConnectionsContainer';
import Message from './components/MessageContainer';
import LocationSettings from './components/LocationSettingsContainer';
import Messages from './components/MessagesContainer';
// import FriendReqSent from './components/FriendReqSentContainer';
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
import Context from './store/Context';
import './styles/App.css';
function App(props) {
  console.log('App fired');
  const { setLoggedInUser } = React.useContext(Context);
  // const { UpdateProfile } = useContext(Context);
  // UpdateProfile(3, [{ location: 'Hamburg' }]);
  React.useEffect(() => {
    console.log('OK');
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      console.log('Token', token);
      if (token) {
        const response = await fetch('http://localhost:5000/user', {
          headers: {
            Authorization: `bearer ${token}`
          }
        });
        const user = await response.json();
        await setLoggedInUser(user);
      }
    };
    // SEND TOKEN TO BACKEND
    fetchUser();
    // IF USER IS IN RESPONSE, SAVE IT IN GLOBAL STATE (CONTEXT)
  }, []);
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route
          exact
          path="/termsandconditions"
          component={TermsAndConditions}
        />
        <Route exact path="/setupprofile" component={SetupProfile} />
        <Route exact path="/searchartforms" component={SearchArtForms} />
        <Route exact path="/searchprofiles" component={SearchProfiles} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/connections" component={Connections} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/locationsettings" component={LocationSettings} />
        <Route exact path="/messages" component={Messages} />
        {/* <Route exact path="/friendreqsent" component={FriendReqSent} /> */}
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/deleteaccount" component={DeleteAccount} />
        <Route exact path="/aboutus" component={AboutUsContainer} />
        <Route exact path="/accountdeleted" component={AccountDeleted} />
        <Route exact path="/viewmyprofile" component={ViewMyProfileContainer} />
        <Route exact path="/myartforms" component={MyArtForms} />
        <Route
          exact
          path="/profileofanotheruser"
          component={ProfileOfAnotherUserContainer}
        />
        <Route
          exact
          path="/youneedtohaveaprofile"
          component={MustHavaAProfileContainer}
        />
        <Route exact path="/mygallery" component={MyGallery} />
        <Route
          exact
          path="/anotherusergallery"
          component={AnotherUserGallery}
        />
        <Route exact path="/activationkeysent" component={ActivationKeySent} />
      </HashRouter>
    </div>
  );
}

export default withRouter(App);
