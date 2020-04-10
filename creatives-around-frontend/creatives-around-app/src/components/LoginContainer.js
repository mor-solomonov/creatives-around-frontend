import React from 'react';
import Logo from './SymbolsandTitles/Logo';
import DisplayTitle from './SymbolsandTitles/DisplayTitle';
import { Link } from 'react-router-dom';

export default function LoginContainer() {
    const [state, setState] = React.useState({
        email: '',
        password: ''
    });
    const updateState = (e) => {
        console.log('VALUE', e.target.value);
        console.log('NAME', e.target.name);
        setState({ ...state, [e.target.name]: e.target.value });
    };
    return (
        <div className="App-Container">
            <Logo />
            <DisplayTitle title="Login" />

            <form action='http://localhost:5000/api/auth/login' method='POST'>
                <input
                    className='Email form-control mb-4'
                    placeholder='Email:'
                    type='text'
                    name='email'
                    onChange={updateState}
                />
                <input
                    className='Password form-control mb-4'
                    placeholder='Password:'
                    type='text'
                    name='password'
                    onChange={updateState}
                />
            </form>
            <button className="LoginButton btn btn-light mb-4">Login</button>
            <div>
                <p className="SignUp">Not a member yet? &nbsp;
               <Link to="/signup">
                        <button>Sign up</button>
                    </Link></p>

            </div>
        </div>
    )
}
