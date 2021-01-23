import React, { useState } from 'react';
import { authUser } from '../../firebase'

const Login = ({ setUser, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = (e) => {
    e.target.id === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    authUser(email, password, setUser, history)
  }
  return (
    <form className='col-md-6 offset-md-3 min-vh-100 d-flex flex-column justify-content-center'>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label' >Login</label>
        <input type='email' className='form-control' value={email} onChange={handleChange} id='email' />
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label' >Password</label>
        <input type='password' className='form-control' value={password} onChange={handleChange} id='password' />
      </div>
      <button className='btn btn-primary col-md-3' onClick={(e) => handleSubmit(e)}>Log in</button>
    </form>)
};

export default Login;