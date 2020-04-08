import React from 'react';
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import DisplayTitle from './SymbolsandTitles/DisplayTitle';
import SignUpPageForm from './Forms/SignUpPageForm';
import GoBackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function SignUpContainer() {
    const [state, setState] = React.useState({
        email: '',
        password: '',
        terms: false,
    });
    const updateState = (e) => {
        console.log('VALUE', e.target.value);
        console.log('NAME', e.target.name);
        setState({ ...state, [e.target.name]: e.target.value });
    };
    return (
        <div className='App-Container'>
            <Logo />
            <DisplayTitle title="Sign up" />
            <SignUpPageForm />
            <form action='http://localhost:5000/api/auth/register' method='POST'>
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
                <input
                    className='Password form-control mb-4'
                    placeholder='Confirm Password:'
                    type='text'
                    name='Confirm password'
                    onChange={updateState}
                />

                <input id='checkbox' type='checkbox' name='terms' value={state.terms} onChange={updateState} />
                <label className='Agree'>&nbsp; &nbsp;I agree to the</label>
                <Link to='/termsandconditions'>&nbsp;terms and conditions</Link>


            </form>
            <button type='submit' className='LoginButton btn btn-light mb-4'>
                Sign up
        </button>
            <GoBackButton />
        </div>
    )
}