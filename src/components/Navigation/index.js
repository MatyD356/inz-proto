import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ user }) => (
  <div>
    <h1>RCP</h1>
    <ul>
      <li>
        <Link to={ROUTES.LOGIN}>Log out</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      {user?.type === 'admin' ? <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li> : null}
    </ul>
  </div>
);

export default Navigation