import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import classes from './Login.module.css';

export function Login({ login, isAuth }) {
  if (isAuth) {
    return <Navigate to='/profile' />;
  }
  return (
    <Formik
      initialValues={{ userName: '', password: '' }}
      onSubmit={(values) => {
        login(values.userName, values.password);
      }}
    >
      {() => (
        <Form>
          <h1 className={classes.name}>Login</h1>
          <div className={classes.item}>
            Login
          </div>
          <Field
            name="userName"
          />
          <div className={classes.item}>
            Password
          </div>
          <Field
            name="password"
            type="password"
          />
          <button type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}
