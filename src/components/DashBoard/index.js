import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation'
import { generateUserDocument } from '../../firebase'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../App/PrivateRoute'
import * as ROUTES from '../../constants/routes'
import Admin from '../Admin';


const DashBoard = ({ currentUser }) => {
  const [userDoc, setUserDoc] = useState(null)
  useEffect(() => {
    generateUserDocument(currentUser?.user.uid, setUserDoc);
  }, [currentUser])
  return (
    <div>
      <Navigation />
      {userDoc === null
        ? <h1>loading...</h1>
        : <div className='container'>
          <Route path={ROUTES.ADMIN} component={Admin} />
        </div>}
    </div>
  )
};

export default DashBoard;
