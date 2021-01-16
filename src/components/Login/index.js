import React, { useState } from 'react';
import { generateUserDocument } from '../../firebase'
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = (e) => {
    e.target.id === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in 
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
  }
  return (
    <div>
      <form>
        <input type='email' value={email} onChange={handleChange} id='email' />
        <input type='password' value={password} onChange={handleChange} id='password' />
        <button onClick={(e) => handleSubmit(e)}>Log in</button>
      </form>
    </div>)
};

export default Login;