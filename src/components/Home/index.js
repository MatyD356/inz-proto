import React from 'react';
import Navigation from '../Navigation'


const Home = ({ user }) => (
  <div>
    <Navigation user={user} />
    <div className='container'>
      <h1>Home</h1>
      <p>first name: {user.name}</p>
      <p>last name: {user.lastName}</p>
    </div>
  </div>
);

export default Home;