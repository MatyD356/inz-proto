import React from 'react';
import Navigation from '../Navigation'


const Home = ({ user }) => (
  <div>
    <Navigation />
    <h1>Home</h1>
    <p>first name: {user.name}</p>
    <p>last name: {user.lastName}</p>
  </div>
);

export default Home;