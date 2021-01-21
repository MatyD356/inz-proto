import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ user }) => (
  <nav className='navbar navbar-expand-lg navvar-dark bg-dark text-light d-flex justify-content-between'>
    <h1 className='navbar-brand'>RCP</h1>
    <ul className='navbar-nav'>
      <li className='nav-item nav-link'>
        <Link to={ROUTES.HOME}>Home</Link>
      </li >
      {user?.type === 'admin' ? <li className='nav-item nav-link'>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li> : null}
      <li className='nav-item nav-link'>
        <Link to={ROUTES.LOGIN}>Log out</Link>
      </li>

    </ul>
  </nav>
);

export default Navigation