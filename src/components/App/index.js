import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Home from '../Home'
import Login from '../Login'

const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log(user);
  })
  return (<div>
    <Router>
      <Route path={ROUTES.HOME} component={() => <Home user={user} />} />
      <Route path={ROUTES.LOGIN} component={() => <Login setUser={setUser} />} />
    </Router>
  </div>)
};

export default App;