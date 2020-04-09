import React, { useContext } from 'react';
import Logo from './SymbolsandTitles/Logo';
import LoginPageForm from './Forms/LoginPageForm';
import DisplayTitle from './SymbolsandTitles/DisplayTitle';
import { Link } from 'react-router-dom';
import Context from '../store/Context';

export default function LoginContainer() {
    //please read the data from the context
    let { isLoggedIn, setIsLoggedIn, profiles, setProfiles, Login } = useContext(Context);

    const [state, setState] = React.useState({
        email: '',
        password: ''
    });
    const updateState = (e) => {
        console.log('VALUE', e.target.value);
        console.log('NAME', e.target.name);
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        Login(state.email, state.password)

    };

    console.log(isLoggedIn);
    return (
        <div className="App-Container">
            <Logo />
            <DisplayTitle title="Login" />
            <LoginPageForm />
            {/* action='http://localhost:5000/api/auth/login' method='POST' */}
            <form onSubmit={handleSubmit}>
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
                <button className="LoginButton btn btn-light mb-4" type="submit">Login</button>
            </form>

            <div>
                <p className="SignUp">Not a member yet? &nbsp;
               <Link to="/signup">
                        <button>Sign up</button>
                    </Link></p>

            </div>
        </div>
    )
}
