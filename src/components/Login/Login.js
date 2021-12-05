import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

function loginUser(credentials) {
  return fetch(`http://localhost:5000/users/getUserByUsername/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(response => response.json())
}

export default function Login({ setUID }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [usernamer, setUserNameR] = useState();
    const [passwordr, setPasswordR] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const UID = await loginUser({
        username,
        password
      });
      


      setUID(UID);

      localStorage.setItem('UserID', UID.UID)
      localStorage.setItem('username', UID.username)
      localStorage.setItem('admin', UID.admin)

      }



  const handleRegistration = async e => {
    e.preventDefault();
    const UID = await register({
      usernamer,
      passwordr,
      phone,
      email
    });
   
  }

  function register(credentials) {
    return fetch('http://localhost:5000/users/register/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => console.log(data.json))
    //setUID(UID,username,admin);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <h1>Or Register a New Account</h1>
      <form onSubmit={handleRegistration}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserNameR(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPasswordR(e.target.value)}/>
        </label>
        <label>
          <p>Phone</p>
          <input type="text" onChange={e => setPhone(e.target.value)}/>
        </label>
        <label>
          <p>Email</p>
          <input type="email" onChange={e => setEmail(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
    setUID: PropTypes.func.isRequired
  }