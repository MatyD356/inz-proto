import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Admin from '../Admin';
import Home from '../Home'
import Login from '../Login'
import NotFound from '../404'

const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log(user);
  })
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Router>
        {/*TO DO implent auth routing in proper way*/}
        {/*TO DO implent browser history obj*/}
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={() => <Login setUser={setUser} />} />
          <Route exact path={ROUTES.HOME} component={() => <Home user={user} />} />
          <Route exact path={ROUTES.ADMIN} component={() => <Admin user={user} />} />
          <Route path='/' component={NotFound} />
        </Switch>
      </Router>
    </div>)
};

export default App;