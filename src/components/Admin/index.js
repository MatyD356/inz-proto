import React, { useEffect, useState } from 'react';
import NewUserForm from '../NewUserForm'
import { watchForChanges } from '../../firebase'
import UserItem from './UserItem';

const Admin = () => {
  const [users, setUsers] = useState([])
  const [userForm, setUserForm] = useState(false)
  useEffect(() => {
    watchForChanges(setUsers)
  }, [])

  return (
    <div>
      <div className='container'>
        <h1>Admin</h1>
        <div>
          <ul className='list-group'>
            <li className='list-group-item active'>
              <span className='row'>
                <span className='col-3 col-md-3'>First name</span>
                <span className='col-4 col-md-3'>Last name</span>
                <span className='col-3 col-md-3'>Type</span>
              </span>
            </li>
            {users.length > 0
              ? users.map((item, index) => <UserItem item={item} key={index} />)
              : null
            }
          </ul>
          <button
            className={`btn ${userForm ? 'btn-danger' : 'btn-success'} mt-3`}
            onClick={() => setUserForm(!userForm)}>
            {userForm ? 'Cancel' : 'Add user'}
          </button>
          {userForm ? <NewUserForm toggleForm={setUserForm} /> : null}
        </div>
      </div>
    </div>
  )
};

export default Admin;