import React from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useState } from 'react';

const LoginSignup = () => {
    const [action, setAction] = useState('Sign Up');

    function signup() {
        setAction('Sign Up');
    }

    function login() {
        setAction('Login');
    }

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className={'inputs'}>
            <div className={action === 'Sign Up' ? 'input' : 'input hide'}>
                <img src={user_icon} alt='' />
                <input type='text' placeholder='Name' />
            </div>
            <div className='input'>
                <img src={email_icon} alt='' />
                <input type='email' placeholder='Email' />
            </div>
            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password' placeholder='Password' />
            </div>
        </div>
        <div className={action === 'Sign Up' ? 'forgot-password hide' : 'forgot-password'}>Lost Password? <span>Click Here!</span></div>
        <div className='submit-container'>
            <button type='button' className={action === 'Sign Up' ? 'submit' : 'submit gray'} onClick={signup}>Sign Up</button>
            <button type='button' className={action === 'Login' ? 'submit' : 'submit gray'} onClick={login}>Login</button>
        </div>
    </div>
  );
}

export default LoginSignup;