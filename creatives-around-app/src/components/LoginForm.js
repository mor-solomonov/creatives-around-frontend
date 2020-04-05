import React from 'react';

export default function LoginForm() {
  return (
    <form action='/api/auth/login' method='POST'>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' value='test@test.com' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value='123456' />
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
}
