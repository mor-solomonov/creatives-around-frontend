import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Logo from './SymbolsandTitles/Logo';
import DisplayTitle from './SymbolsandTitles/DisplayTitle';
import { Link } from 'react-router-dom';
export default function LoginContainer() {
  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const [redirect, setRedirect] = useState(false);
  const updateState = e => {
    console.log('VALUE', e.target.value);
    console.log('NAME', e.target.name);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  // //Redirect handler
  const handleRedirect = () => {
    setRedirect(true);
  };
  //Redirect function
  const renderRedirect = user => {
    let path = '';
    user.username ? (path = '/searchprofiles') : (path = '/setupprofile');
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: path,
            state: {}
          }}
        />
      );
    }
  };
  const submitForm = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'content-type': 'application/json'
      }
    });
    const result = await response.json();
    if (result.token) {
      localStorage.setItem('token', result.token);
      window.location.reload();
    }
  };
  return (
    <div className="App-Container">
      <Logo />
      <form onSubmit={submitForm} className="LoginForm">
        <DisplayTitle title="Login" className="LoginHeader" />
        <input
          className="Email form-control mb-4"
          placeholder="Email:"
          type="text"
          name="email"
          onChange={updateState}
        />
        <input
          className="Password form-control mb-4"
          placeholder="Password:"
          type="text"
          name="password"
          onChange={updateState}
        />
        <div className="text-center">
          <Link to="/searchprofiles">
            <button className="LoginButton mb-4 btn btn-light">Login</button>
          </Link>
        </div>

        <div className="text-center signup-discover">
          <div className=" divdiscover">
            <p className="SignUp">
              Not a member yet? &nbsp;
            <Link to="/signup">
                <button className="btn btn-light">Sign up</button>
              </Link>
            </p>
          </div>
          <div className="divdiscover">
            <p className="login-about-us-button">
              Discover{' '}
              <Link className="login-about-us-button" to="/aboutus">
                <b>HERE</b>
              </Link>{' '}
              more about us
          </p>
          </div>
        </div>
      </form>
    </div>
  );
}
