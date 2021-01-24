import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation'
import { generateUserDocument } from '../../firebase'


const DashBoard = ({ currentUser }) => {
  const [userDoc, setUserDoc] = useState(null)
  useEffect(() => {
    generateUserDocument(currentUser?.user.uid, setUserDoc);
    console.log(userDoc);
  }, [currentUser])
  return (userDoc === null
    ? <h1>loading...</h1>
    : <div>
      < Navigation user={userDoc} />
      <div className='container'>
        <h1>DashBoard</h1>
        <p>{userDoc.name}</p>
        <p>{userDoc.lastName}</p>
      </div>
    </div >
  )
};

export default DashBoard;