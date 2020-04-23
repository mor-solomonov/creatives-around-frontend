import React, { Fragment, useContext } from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import { Distance } from 'geo-distance';
import { getDistance, getPreciseDistance } from 'geolib';
import Context from '../store/Context';

export default function SearchProfilesContainer() {
  //? Geolib:
  //   { latitude: 52.505292, longitude: 13.4670571 },
  //   { latitude: 52.5046177, longitude: 13.4690677 }

  const data = useContext(Context);
  let [filteredUsers, setFilteredUsers] = useState(data.profiles);
  console.log(data.activeProfile);

  const _getDistance = (active, all) => {
    var dis = getDistance();
    alert(`Distance\n${dis} Meter\nor\n${dis / 1000} KM`);
  };
  const _getPreciseDistance = () => {
    var pdis = getPreciseDistance(
      { latitude: 52.505292, longitude: 13.4670571 },
      { latitude: 52.5046177, longitude: 13.4690677 }
    );
    alert(`Precise Distance\n${pdis} Meter\nor\n${pdis / 1000} KM`);
  };

  const searchProfilesDistance = maxDistance => {
    let activeProfile = data.activeProfile;
    let allProfiles = data.profiles;

    allProfiles.forEach(profile => {
      let checkedDistance = getDistance(
        activeProfile.geolocation,
        profile.geolocation
      );

      if (checkedDistance < maxDistance) {
            /*
            
            1.Every user that matches the distance => put into filtered users array/state
            
            2. Display filtered users in JSX (map over and display all of them in the react page)

            3. Create input for distance, be able to read out

            4. Set button or automatic update (onChange) for filter
                > call searchProfilesDistance(maxDistance)
            
            */
        }

      console.log(
        checkedDistance,
        activeProfile.name,
        activeProfile.location,
        profile.name,
        profile.location
      );
    });
  };
  searchProfilesDistance();
  //   _getPreciseDistance();
  return (
    <Fragment>
      <div className="App-Container">
        <TitleWithSymbol title="Search Profiles" />
      </div>
    </Fragment>
  );
}
//?     https://www.npmjs.com/package/geo-distance

//? Geo-distance:
//   console.log('' + Distance('50 km').human_readable('customary'));

//   var Oslo = {
//     lat: 59.914,
//     lon: 10.752
//   };
//   var Berlin = {
//     lat: 52.523,
//     lon: 13.412
//   };
//   var OsloToBerlin = Distance.between(Oslo, Berlin);

//   console.log('Oslo to Berlin:');

//   console.log('' + OsloToBerlin.human_readable());
//   if (OsloToBerlin > Distance('800 km')) {
//     console.log('Nice journey!');
//   }

//? Modify:
// import nodeGeocoder from 'node-geocoder';
//   const testGeoLocation = () => {
//     let options = {
//       provider: 'openstreetmap'
//     };

//     let geoCoder = nodeGeocoder(options);

//     geoCoder
//       .geocode('Sonntagstrasse 6, Berlin')
//       .then(res => {
//         console.log('Result:');
//         console.log(res);
//       })
//       .catch(err => {
//         console.log('Error:');
//         console.log(err);
//       });
//   };
//   testGeoLocation();
