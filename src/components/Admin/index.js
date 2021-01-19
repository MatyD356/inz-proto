import React, { useState } from 'react';
import Navigation from '../Navigation'
import { addUser } from '../../firebase'


const Admin = ({ user }) => {
  const [users, setUser] = useState(null)
  const [email, setEmail] = useState('newUser@gmail.com')
  const [newUser, setNewUser] = useState({
    name: 'bezi',
    lastName: 'żółtodziób',
    type: 'user',
  })
  return (
    <div>
      <Navigation user={user} />
      <h1>Admin</h1>
      <p>first name: {user.name}</p>
      <p>last name: {user.lastName}</p>
      <button onClick={() => addUser(email, '123456', newUser)}>Add user</button>
      <button>Show users</button>
    </div>
  )
};

export default Admin;