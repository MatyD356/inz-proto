import React from 'react';
import Navigation from '../Navigation'


const Admin = ({ user }) => (
  <div>
    <Navigation user={user} />
    <h1>Admin</h1>
    <p>first name: {user.name}</p>
    <p>last name: {user.lastName}</p>
  </div>
);

export default Admin;