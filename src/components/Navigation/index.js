import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <h1>RCP</h1>
    <ul>
      <li>
        <Link to={ROUTES.LOGIN}>Log in</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
    </ul>
  </div>
);

export default Navigation