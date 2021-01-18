import React, { useState } from 'react';
import { generateUserDocument } from '../../firebase'
import firebase from "firebase/app";
import "firebase/auth";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = (e) => {
    e.target.id === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        generateUserDocument(user.user.uid, setUser)
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
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