/* eslint-disable no-console */
import React, { Component } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

export default class ValidatedSignIn extends Component {
  render() {
      return (
          <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                      console.log('Logging in', values);
                      setSubmitting(false);
                  }, 500);
              }}
              validationSchema={Yup.object().shape({
                  email: Yup.string()
                      .email()
                      .required('Required'),
                  password: Yup.string()
                      .required('No password provided.')
                      .min(8, 'Password is too short - should be 8 chars minimum.')
                      .matches(/(?=.*[0-9])/, 'Password must contain a number.')
              })}
              >
              {({//this one is props()
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit
              })=>(//this starting the return
          <span className='border border-dark rounded ' id='formikgroup'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && 'error'}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && 'error'}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting} id='register'>
            Login
          </button>
              </form>
         </span>
              )}
        </Formik>
    )
  }
}