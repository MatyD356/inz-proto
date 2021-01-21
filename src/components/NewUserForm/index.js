import React, { useState, useEffect } from 'react';
import { addUser } from '../../firebase'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newUser, setNewUser] = useState({
    name: 'bezi',
    lastName: 'żółtodziób',
    type: 'user',
  })
  useEffect(() => {
    console.log(newUser);
  })
  const editNewUserName = (e) => {
    setNewUser(Object.assign({}, newUser, { name: e.target.value }))
  }
  const editNewUserLastName = (e) => {
    setNewUser(Object.assign({}, newUser, { lastName: e.target.value }))
  }
  const editNewUserType = (e) => {
    setNewUser(Object.assign({}, newUser, { type: e.target.value }))
  }
  const handleChange = (e) => {
    e.target.id === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(email, password, newUser)
  }
  return (
    <form className=''>
      <div className='form-row'>
        <div className='form-group col-md-3'>
          <label htmlFor='email' className='form-label' >Login</label>
          <input type='email' className='form-control' value={email} onChange={handleChange} id='email' />
        </div>
        <div className='form-group col-md-3'>
          <label htmlFor='password' className='form-label' >Password</label>
          <input type='password' className='form-control' value={password} onChange={handleChange} id='password' />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-group col-md-2'>
          <label htmlFor='name' className='form-label' >Name</label>
          <input type='text' className='form-control' id='name' value={newUser.name} onChange={editNewUserName} />
        </div>
        <div className='form-group col-md-2'>
          <label htmlFor='lastName' className='form-label' >Last Name</label>
          <input type='text' className='form-control' id='lastName' value={newUser.lastName} onChange={editNewUserLastName} />
        </div>
        <div className='form-group col-md-2'>
          <label htmlFor='lastName' className='form-label' >Type</label>
          <select type='text' className='form-control' id='lastName' value={newUser.type} onChange={editNewUserType}>
            <option value='user' selected >user</option>
            <option value='admin' >admin</option>
          </select>
        </div>
      </div>
      <button className='btn btn-primary' onClick={(e) => handleSubmit(e)}>Add</button>
    </form>)
};

export default Login;