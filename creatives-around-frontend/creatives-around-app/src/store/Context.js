import React, { createContext, useState, useEffect } from 'react';
const DataContext = createContext();
export const DataProvider = props => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [loggedInUser, setLoggedInUser] = useState(null);
  let [profiles, setProfiles] = useState([
    {
      userId: 1,
      email: 'mor.solomonov@gmail.com',
      name: 'Kaiser Strasse Hamburg',
      username: 'mor',
      birthday: '1984-01-01',
      age: '35',
      location: 'Sweden',
      geolocation: {
        latitude: 53.49651,
        longitude: 10.2103
      },
      artForms: [
        'Water Color',
        'Photography',
        'Acrylic',
        'Sculpture',
        'Digital Art'
      ],
      bio: 'My name is...',
      searchingArtForms: [
        'Water Color',
        'Photography',
        'Acrylic',
        'Sculpture',
        'Digital Art'
      ],
      links: [{ name: 'Test', url: 'http://test.me' }],
      events: [{ name: 'Test', date: '18-10-2020' }],
      district: 'T-hof',
      messages: [{ msg: 'Hello', fromUser: 'Rob' }]
    },
    {
      userId: 2,
      email: 'nic@gmail.com',
      name: 'Kaiserin Augusta Strasse',
      birthday: '1986-01-01',
      location: 'Berlin',
      district: 'F-Hain',
      geolocation: {
        latitude: 52.460621,
        longitude: 13.36987
      }
    },
    {
      userId: 3,
      name: 'Köln',
      email: 'rob@gmail.com',
      birthday: '1983-01-01',
      location: 'Berlin',
      district: 'Wedding',
      geolocation: {
        latitude: 50.942584,
        longitude: 6.955347
      }
    },
    {
      userId: 4,
      name: 'Alexanderplatitudez',
      email: 'rob@gmail.com',
      birthday: '1983-01-01',
      location: 'Berlin',
      district: 'Wedding',
      geolocation: {
        latitude: 52.52127,
        longitude: 13.41268
      }
    },
    {
      userId: 5,
      name: 'Hasenheide',
      email: 'rob@gmail.com',
      birthday: '1983-01-01',
      location: 'Berlin',
      district: 'Hasenheide',
      geolocation: {
        latitude: 52.48552,
        longitude: 13.42992
      }
    },
    {
      userId: 6,
      name: 'Karl-Marx',
      email: 'rob@gmail.com',
      birthday: '1983-01-01',
      location: 'Berlin',
      district: 'Karl-Marx-1',
      geolocation: {
        latitude: 52.486347,
        longitude: 13.424793
      }
    }
  ]);

  let [activeProfile, setActiveProfile] = useState(profiles[0]);

  const Login = (email, password) => {
    let userFound = profiles.find(profile => profile.email == email);
    console.log(userFound);
    if (userFound) {
      setIsLoggedIn(true);
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
        UpdateProfile,
        activeProfile
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
// export const DataConsumer = DataContext.Consumer

export default DataContext;
