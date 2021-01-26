import React from 'react';
import { authUser } from '../../firebase'
import { Formik, Field, Form } from 'formik'

const Login = ({ setCurrentUser, history }) => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {

          authUser(values.email, values.password, setCurrentUser, history)
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='col-md-6 offset-md-3 min-vh-100 d-flex flex-column justify-content-center'>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label' >Email</label>
              <Field name='email' type='email' className='form-control' />
              {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label' >Password</label>
              <Field name='password' type='password' className='form-control' />
              {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
            </div>
            <button className='btn btn-primary col-md-3' type='submit'>Log in</button>
          </Form>
        )}
      </Formik>
    </div>)
};

export default Login;