import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: 'carlos@gmail.com',
    password: '123456',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type='text'
          className='auth__input'
          placeholder='Email'
          name='email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          className='auth__input'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='btn btn-primary btn-block'
          disabled={false}>
          Login
        </button>
        <hr />

        <div className='auth__social-networks'>
          <p>Login with social networks</p>

          <div className='google-btn' onClick={handleGoogleLogin}>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to='/auth/register' className='link'>
          Create new account
        </Link>
      </form>
    </>
  );
};
