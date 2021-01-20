import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Admin from '../Admin';
import Home from '../Home'
import Login from '../Login'

const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log(user);
  })
  return (
    <div className='container-fluid min-vh-100 d-flex flex-column'>
      <Router>
        {/*TO DO implent auth routing in proper way*/}
        {/*TO DO implent browser history obj*/}
        {user ? <Redirect to='/home' /> : <Redirect to='/' />}
        <Route exact path={ROUTES.LOGIN} component={() => <Login setUser={setUser} />} />
        <Route path={ROUTES.HOME} component={() => <Home user={user} />} />
        <Route path={ROUTES.ADMIN} component={() => <Admin user={user} />} />
      </Router>
    </div>)
};

export default App;