import React from 'react';
import { Formik, Form, Field } from 'formik';
import classes from './Registration.module.css';

export function Registration({ registration }) {
  return (
    <Formik
      initialValues={{
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values) => {
        registration(values.userName, values.password, values.firstName, values.lastName, values.email);
      }}
    >
      {() => (
        <Form>
          <div className={classes.item}>Registration</div>
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
          <div className={classes.item}>
            First Name
          </div>
          <Field
            name="firstName"
          />
          <div className={classes.item}>
            Last Name
          </div>
          <Field
            name="lastName"
          />
          <div className={classes.item}>
            Email
          </div>
          <Field
            name="email"
          />
          <button type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}
