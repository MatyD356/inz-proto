import React from 'react';
import { authUser } from '../../firebase'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const Login = ({ setCurrentUser, history }) => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          authUser(values.email, values.password, setCurrentUser, history)
        }}
        validate={values => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 6) {
            errors.password = 'Password must be 6 characters long';
          }

          return errors;
        }}>
        {({ errors, touched }) => (
          <Form className='col-md-6 offset-md-3 min-vh-100 d-flex flex-column justify-content-center'>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label' >Email</label>
              <Field name='email' type='email' className='form-control' />
              <div className='text-danger' style={{ minHeight: 34 }}>
                {errors.email && touched.email ? errors.email : ''}
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label' >Password</label>
              <Field name='password' type='password' className='form-control' />
              <div className='text-danger' style={{ minHeight: 34 }}>
                {errors.password && touched.password ? errors.password : ''}
              </div>
            </div>
            <button className='btn btn-primary col-md-3' type='submit'>Log in</button>
          </Form>
        )}
      </Formik>
    </div >)
};

export default Login;