import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import styles from './Login.module.css';
import UserIcon from '../../assets/images/icons/UserIcon.png';
import LockIcon from '../../assets/images/icons/LockIcon.png';

export function Login({ login, isAuth }) {
  if (isAuth) {
    return <Navigate to='/profile' />;
  }
  return (
    <div className={styles.login}>
      <hr />
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={(values) => {
          login(values.userName, values.password);
        }}
      >
        {() => (
          <Form className={styles.formik}>
            <h1 className={styles.name}>Sign in</h1>
            <div className={styles.itemField}>
              <img className={styles.UserIcon} src={UserIcon} alt="UserIcon" />
              <Field
                className={styles.field}
                placeholder="Your login"
                name="userName"
              />
            </div>
            <div className={styles.itemField}>
              <img className={styles.LockIcon} src={LockIcon} alt="LockIcon" />
              <Field
                className={styles.field}
                placeholder="Your password"
                name="password"
                type="password"
              />
            </div>
            <button className={styles.but} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
