import React from 'react';
import { AppContext } from '../context/AppContext';

export default function RegisterForm() {
  const context = React.useContext(AppContext);
  const [data, setData] = React.useState({
    nickname: 'karol',
    email: 'test@test.com',
    password: '123456',
  });
  const submitForm = (e) => {
    e.preventDefault();
    context.createUser(data);
  };
  const changeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor='nickname'>Nickname</label>
        <input type='text' name='nickname' value={data.nickname} onChange={changeInput} />
      </div>
      <div>
        <label htmlFor='email'>Email address</label>
        <input type='email' name='email' value={data.email} onChange={changeInput} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={data.password} onChange={changeInput} />
      </div>
      <div>
        <button type='submit'>Register</button>
      </div>
    </form>
  );
}
