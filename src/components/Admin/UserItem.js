import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { addDoc } from '../../firebase'

const UserItem = ({ item }) => {
  const [updating, setUpdating] = useState(false)
  return (
    <li className='list-group-item'>
      <Formik
        initialValues={{ name: item.name, lastName: item.lastName, type: item.type }}
        onSubmit={(values) => {
          addDoc(item.id, values.name, values.lastName, values.type)
        }}
      >
        {({ errors, touched, handleBlur, handleChange, values }) => (<Form>
          <span className='row'>
            <span className='col-3 col-md-3'>
              {updating ? <Field name='name' type='text' className='form-control' /> : <p>{item.name}</p>}
            </span>
            <span className='col-4 col-md-3'>
              {updating ? <Field name='lastName' type='text' className='form-control' /> : <p>{item.lastName}</p>}
            </span>
            <span className='col-3 col-md-3'>
              {updating
                ? <select
                  name='type'
                  className='form-control'
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  <option value='user' label='user' />
                  <option value='admin' label='admin' />
                </select>
                : <p>{item.type}</p>}
            </span>
            {updating
              ? <button className='btn btn-success mr-3' onClick={() => setUpdating(!updating)}>save</button>
              : <button className='btn btn-primary mr-3' onClick={() => setUpdating(!updating)}>update</button>}
            {updating
              ? <button className='btn btn-danger' type='submit' onClick={() => setUpdating(!updating)}>cancel</button>
              : <button className='btn btn-danger'>delete</button>}
          </span>
        </Form>)}
      </Formik>
    </li>
  )
}

export default UserItem