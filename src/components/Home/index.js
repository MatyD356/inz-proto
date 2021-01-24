import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1>Best RCP App</h1>
      <Link to='/login'><button className='btn btn-lg btn-primary'>LOGIN</button></Link>
    </div>)
};

export default Home;