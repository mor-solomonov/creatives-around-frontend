import React, { createContext, useState, useEffect } from 'react';
const DataContext = createContext();
export const DataProvider = props => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [loggedInUser, setLoggedInUser] = useState(null);
  let [profiles, setProfiles] = useState([
    {
      userId: 1,
      email: 'mor.solomonov@gmail.com',
      username: 'Mor',
      birthday: '1984-01-01',
      location: 'Berlin',
      district: 'T-hof',
      messages: [{ msg: 'Hello', fromUser: 'Rob' }]
    },
    {
      userId: 2,
      email: 'nic@gmail.com',
      username: 'Nic',
      birthday: '1986-01-01',
      location: 'Berlin',
      district: 'F-Hain'
    },
    {
      userId: 3,
      username: 'Rob',
      email: 'rob@gmail.com',
      birthday: '1983-01-01',
      location: 'Berlin',
      district: 'Wedding'
    }
  ]);

  const Login = (email, password) => {
    let userFound = profiles.find(profile => profile.email == email);
    console.log(userFound);
    if (userFound) {
      // setIsLoggedIn(true);
      setLoggedInUser(userFound);
    }
  };

  const UpdateProfile = (userId, profileFields) => {
    console.log('Update profile executed', userId, profileFields);

    let profileFieldsKeys = Object.keys(profileFields);

    let profilesCopy = [...profiles];
    let profileFound = profilesCopy.find(profile => {
      return profile.userId == userId;
    });

    profileFieldsKeys.forEach(key => {
      profileFound[key] = profileFields[key];
    });
    console.log(profilesCopy);
    setProfiles(profilesCopy);
  };

  //? Karol's tip:
  //? Remember to add any new functions to value properties. Then = shared through all components.

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        loggedInUser,
        setLoggedInUser,
        setIsLoggedIn,
        profiles,
        setProfiles,
        Login,
        UpdateProfile
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
// export const DataConsumer = DataContext.Consumer

export default DataContext;
