import React, { Fragment } from 'react'
import '../styles/App.css';
import DisplayTitle from './DisplayTitle';

const ProfileOfAnotherUserContainer = () => {
    return (
        <Fragment>
            <div className="App-Container">
                {/* <h3>Profile of Another User</h3> */}
                <DisplayTitle title="Profile of another user" />
            </div>
        </Fragment>
    )

};

export default ProfileOfAnotherUserContainer;


