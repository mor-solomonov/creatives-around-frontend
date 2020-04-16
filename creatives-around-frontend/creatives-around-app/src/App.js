import React, { useContext } from 'react';
import '../styles/App.css';
import LoginContainer from './LoginContainer';

function App() {
  console.log('App fired');

  // const { UpdateProfile } = useContext(Context);

  // UpdateProfile(3, [{ location: 'Hamburg' }]);

  return (
    <div className="App">
      <LoginContainer />
    </div>
  );
}

export default App;
