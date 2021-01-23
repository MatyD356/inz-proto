import React from 'react';
import Navigation from '../Navigation'


const DashBoard = ({ user }) => {
  return (user === null
    ? <h1>loading...</h1>
    : <div>
      < Navigation user={user} />
      <div className='container'>
        <h1>DashBoard</h1>
      </div>
    </div >
  )
};

export default DashBoard;