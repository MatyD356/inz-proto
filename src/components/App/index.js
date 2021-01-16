import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation'
import Home from '../Home'
import Login from '../Login'

const App = () => (
  <div>
    <Router>
      <div>
        <Navigation />
      </div>
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.LOGIN} component={Login} />
    </Router>
  </div>
);

export default App;