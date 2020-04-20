import React, { Fragment } from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import Context from '../store/Context';

const ViewMyProfileContainer = () => {
  const { loggedInUser } = React.useContext(Context);
  console.log('VIEW PROFILE', loggedInUser);
  return (
    <Fragment>
      <div className='App-Container'>
        <TitleWithSymbol title='My Profile' />
        {loggedInUser ? (
          <>
            <p>{loggedInUser.email}</p>
            <p>{loggedInUser.birthday}</p>
            <p>{loggedInUser.location}</p>
            <p>{loggedInUser.fullName}</p>
          </>
        ) : (
          <>
            <p>You are not loggedn in</p>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default ViewMyProfileContainer;
