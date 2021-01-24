import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import DashBoard from '../DashBoard'
import Login from '../Login'
import NotFound from '../404'
import Home from '../Home'
import PrivateRoute from './PrivateRoute'
import Admin from '../Admin'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} render={(props) => <Home {...props} />} />
          <Route path={ROUTES.LOGIN} render={(props) => <Login {...props} setCurrentUser={setCurrentUser} />} />
          <PrivateRoute
            authed={currentUser !== null ? true : false}
            currentUser={currentUser}
            path={ROUTES.DASHBOARD}
            component={DashBoard}
          />
          <PrivateRoute
            authed={currentUser !== null ? true : false}
            currentUser={currentUser}
            path={ROUTES.ADMIN}
            component={Admin}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>)
};

export default App;