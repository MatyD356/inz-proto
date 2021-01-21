import React, { useState } from 'react';
import Navigation from '../Navigation'
import NewUserForm from '../NewUserForm'

const Admin = ({ user }) => {
  const [users, setUser] = useState(null)
  const [userForm, setUserForm] = useState(false)
  //addUser(email, '123456', newUser)
  return (
    <div>
      <Navigation user={user} />
      <h1>Admin</h1>
      <p>first name: {user.name}</p>
      <p>last name: {user.lastName}</p>
      <button className='btn btn-primary'>Show users</button>
      <button
        className={`btn ${userForm ? 'btn-danger' : 'btn-primary'}  ml-2`}
        onClick={() => setUserForm(!userForm)}>
        {userForm ? 'Cancel' : 'Add user'}
      </button>
      {userForm ? <NewUserForm /> : null}
    </div>
  )
};

export default Admin;