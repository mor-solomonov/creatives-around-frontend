import React from 'react';
import '../styles/App.css';
import Logo from './SymbolsandTitles/Logo';
import DisplayTitle from './SymbolsandTitles/DisplayTitle';
import GoBackButton from './ButtonsAndCheckBoxs/GoBackButton';
import { Link, withRouter } from 'react-router-dom';

function SignUpContainer(props) {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  // ! Nic. Check:
  const [success, setSuccess] = React.useState(null);
  const [errors, setErrors] = React.useState([]);

  const updateState = e => {
    console.log('VALUE', e.target.value);
    console.log('NAME', e.target.name);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const registerUser = async e => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      setErrors([...errors, 'PASSWORDS ARE DIFFERENT']);
    }
    const { email, password } = state;
    await fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    props.history.push('/');
  };
  return (
    <div className="App-Container">
      <Logo />
      <DisplayTitle title="Sign up" />

      <form onSubmit={registerUser}>
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
        <input
          className="Password form-control mb-4"
          placeholder="Confirm Password:"
          type="text"
          name="Confirm password"
          onChange={updateState}
        />

        <input
          id="checkbox"
          type="checkbox"
          name="terms"
          value={state.terms}
          onChange={updateState}
        />
        <label className="Agree">&nbsp; &nbsp;I agree to the</label>
        <Link to="/termsandconditions">&nbsp;terms and conditions</Link>

        <Link to="/activationkeysent">
          <button type="submit" className="LoginButton btn btn-light mb-4">
            Sign up
          </button>
        </Link>
        <Link to="/">
          <GoBackButton />
          {/* ASK KAROL ABOUT! */}
          {success && <p>Thank you for registration</p>}
        </Link>
      </form>
    </div>
  );
}

// </form>
//         </div>
//     )
// }
export default withRouter(SignUpContainer);
