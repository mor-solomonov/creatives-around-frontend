import React, { createContext, useState, useEffect } from 'react';
const DataContext = createContext();
export const DataProvider = (props) => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [loggedInUser, setLoggedInUser] = useState(null);
  let [profiles, setProfiles] = useState([
    {
      userId: 1,
      email: 'mor.solomonov@gmail.com',
      name: 'Mor',
      birthday: '1984-01-01',
      location: 'Berlin',
      district: 'T-hof',
      messages: [{ msg: 'Hello', fromUser: 'Rob' }],
    },
    {
      userId: 2,
      email: 'nic@gmail.com',
      name: 'Nic',
      birthday: '1986-01-01',
      location: 'Berlin',
      district: 'F-Hain',
    },
    {
      userId: 3,
      name: 'Rob',
      email: 'rob@gmail.com',
      birthday: '1983-01-01',
      location: 'Berlin',
      district: 'Wedding',
    },
  ]);

  const Login = (email, password) => {
    let userFound = profiles.find((profile) => profile.email == email);
    console.log(userFound);
    if (userFound) {
      setIsLoggedIn(true);
    }
  };

  const UpdateProfile = (userId, profileFields) => {
    console.log('Update profile executed', userId, profileFields);

    let profileFieldsKeys = Object.keys(profileFields);

    let profilesCopy = [...profiles];
    let profileFound = profilesCopy.find((profile) => {
      return profile.userId == userId;
    });

    profileFieldsKeys.forEach((key) => {
      profileFound[key] = profileFields[key];
    });
    console.log(profilesCopy);
    setProfiles(profilesCopy);
  };

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
        UpdateProfile,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
// export const DataConsumer = DataContext.Consumer

export default DataContext;
