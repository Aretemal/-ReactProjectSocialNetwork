import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import SignInSchema from '../../utils/validators/LoginSchema.js';
import styles from './Login.module.css';
import UserIcon from '../../assets/images/icons/UserIcon.png';
import LockIcon from '../../assets/images/icons/LockIcon.png';
import BackgroundLogin from '../../assets/images/BackgroundLogin.jpg';

export function Login({ onAuthentication, isAuth }) {
  if (isAuth) {
    return <Navigate to='/profile' />;
  }
  return (
    <div className={styles.container}>
      <img className={styles.backgroundTree} src={BackgroundLogin} alt="BackgroundLogin" />
      <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={(values) => {
          onAuthentication({ login: values.login, password: values.password });
        }}
        validationSchema={SignInSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h1>Sign in</h1>
            <div className={styles['form-item']}>
              <img className={styles.UserIcon} src={UserIcon} alt="UserIcon" />
              <Field
                className={styles.field}
                placeholder="Your login"
                name="login"
              />
              {errors.userName && touched.userName ? (
                <div className={styles.error}>{errors.userName}</div>
              ) : null}
            </div>
            <div className={styles['form-item']}>
              <img className={styles.LockIcon} src={LockIcon} alt="LockIcon" />
              <Field
                className={styles.field}
                placeholder="Your password"
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
            </div>
            <button
              disabled={
                  ((errors.userName && touched.userName)
                    || (errors.password && touched.password))
                }
              className={styles.button}
              type="submit"
            >
              Send
            </button>
            <span className={styles.or}> Or </span>
            <NavLink to="/registration" className={styles.registration}>
              Сreate a new account
            </NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
}
