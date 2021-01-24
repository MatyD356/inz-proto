import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import DashBoard from '../DashBoard'
import Login from '../Login'
import NotFound from '../404'
import Home from '../Home'
import PrivateRoute from './PrivateRoute'


const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log(user);
  })
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} render={(props) => <Home {...props} />} />
          <Route path={ROUTES.LOGIN} render={(props) => <Login {...props} setUser={setUser} />} />
          <PrivateRoute authed={user !== null ? true : false} path={ROUTES.DASHBOARD} component={DashBoard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>)
};

export default App;