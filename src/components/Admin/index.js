import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation'
import NewUserForm from '../NewUserForm'
import { watchForChanges } from '../../firebase'

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
                <span className='col-3 col-md-4'>First name</span>
                <span className='col-4 col-md-3'>Last name</span>
                <span className='col-3 col-md-3'>Type</span>
              </span>
            </li>
            {users.length > 0
              ? users.map((item, index) =>
                <li key={index} className='list-group-item'>
                  <span className='row'>
                    <span className='col-3 col-md-4'>{item.name}</span>
                    <span className='col-4 col-md-3'>{item.lastName}</span>
                    <span className='col-3 col-md-3'>{item.type}</span>
                    <button className='btn btn-danger'>delete</button>
                  </span>
                </li>

              )
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