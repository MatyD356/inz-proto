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
        <div className='mb-3'>
          <label htmlFor='email' className='form-label ' >Login</label>
          <input type='email' className='form-control' value={email} onChange={handleChange} id='email' />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label ' >Password</label>
          <input type='password' className='form-control' value={password} onChange={handleChange} id='password' />
        </div>
        <button onClick={(e) => handleSubmit(e)}>Log in</button>
      </form>
    </div>)
};

export default Login;