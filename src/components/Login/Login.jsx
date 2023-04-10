import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.css';
import UserIcon from '../../assets/images/icons/UserIcon.png';
import LockIcon from '../../assets/images/icons/LockIcon.png';

const SigninSchema = Yup.object().shape({
  userName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
export function Login({ login, isAuth }) {
  if (isAuth) {
    return <Navigate to='/profile' />;
  }
  return (
    <div>
      <div className={styles.block} />
      <div className={styles.login}>
        <Formik
          initialValues={{ userName: '', password: '' }}
          onSubmit={(values) => {
            login(values.userName, values.password);
          }}
          validationSchema={SigninSchema}
        >
          {({ errors, touched }) => (
            <Form className={styles.formik}>
              <h1 className={styles.name}>Sign in</h1>
              <div className={styles.itemField}>
                <img className={styles.UserIcon} src={UserIcon} alt="UserIcon" />
                <Field
                  className={styles.field}
                  placeholder="Your login"
                  name="userName"
                />
                {errors.userName && touched.userName ? (
                  <div className={styles.error}>{errors.userName}</div>
                ) : null}
              </div>
              <div className={styles.itemField}>
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
                className={styles.but}
                type="submit"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
