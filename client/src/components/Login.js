import React, { useState } from "react";

import {axiosWithAuth} from '../utils/axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route (push tto bubble url or something)
// console.log(props);
  const [credentials, setCredentials] = useState({
      username: '',
      password: ''
    })
  

  const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
      // console.log(credentials);
  };

  const login = e => {
    e.preventDefault();
    // make a POST request with { username, password } to get the token back
    // endpoint will be "http://localhost:5000/api/login"
    // we will store the token in localstorage
    // if this call is successful we will navigate the user to the /protected route
    // TODO handle errors to show error state on the login form
    console.log("CREDENTIALS:",credentials)
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        // res.data.payload
        console.log('Login post request with token and new credentils:',res);
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        props.history.push('/protected');
      })
      .catch(err => console.log(err.response,));
  };

  return (
    <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
  );
};

export default Login;
