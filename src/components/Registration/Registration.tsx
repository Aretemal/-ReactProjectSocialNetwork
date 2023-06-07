import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Navigate, NavLink } from 'react-router-dom';
import LockIcon from '../../assets/images/icons/LockIcon.png';
import UserIcon from '../../assets/images/icons/UserIcon.png';
import EmailIcon from '../../assets/images/icons/EmailIcon.png';
import NameIcon from '../../assets/images/icons/NameIcon.png';
import SignupSchema from '../../utils/validators/RegistrationSchema';
import styles from './Registration.module.css';
import BackgroundLogin from '../../assets/images/BackgroundLogin.jpg';
import { ILoginProps } from './RegistrationInterface';

const Registration: React.FC<ILoginProps> = ({ onRegistration, isAuth, authLogin }) => {
  if (isAuth) {
    return <Navigate to={`/profile/${authLogin}`} />;
  }
  return (
    <div className={styles.container}>
      <img className={styles.backgroundTree} src={BackgroundLogin} alt="BackgroundLogin" />
      <Formik
        initialValues={{
          login: '',
          password: '',
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          onRegistration({
            login: values.login,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
          });
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h1>Registration</h1>
            <div className={styles.itemField}>
              <img className={styles.UserIcon} src={UserIcon} alt="UserIcon" />
              <Field
                className={styles.field}
                name="login"
                placeholder='Your login'
              />
              {errors.login && touched.login ? (
                <div className={styles.error}>{errors.login}</div>
              ) : null}
            </div>
            <div className={styles.itemField}>
              <img className={styles.LockIcon} src={LockIcon} alt="LockIcon" />
              <Field
                className={styles.field}
                name="password"
                type="password"
                placeholder="Your password"
              />
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
            </div>
            <div className={styles.itemField}>
              <img className={styles.NameIcon} src={NameIcon} alt="NameIcon" />
              <Field
                className={styles.field}
                name="firstName"
                placeholder="First Name"
              />
              {errors.firstName && touched.firstName ? (
                <div className={styles.error}>{errors.firstName}</div>
              ) : null}
            </div>
            <div className={styles.itemField}>
              <img className={styles.NameIcon} src={NameIcon} alt="NameIcon" />
              <Field
                className={`${styles.field} + ${styles.reds}`}
                name="lastName"
                placeholder="Last Name"
              />
              {errors.lastName && touched.lastName ? (
                <div className={styles.error}>{errors.lastName}</div>
              ) : null}
            </div>
            <div className={styles.itemField}>
              <img className={styles.EmailIcon} src={EmailIcon} alt="EmailIcon" />
              <Field
                className={styles.field}
                name="email"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div className={styles.error}>{errors.email}</div>
              ) : null}
            </div>
            <button
              disabled={
                !!(
                  (errors.login && touched.login)
                  || (errors.password && touched.password)
                  || (errors.email && touched.email)
                  || (errors.firstName && touched.firstName)
                  || (errors.lastName && touched.lastName)
                )
              }
              className={styles.but}
              type="submit"
            >
              Send
            </button>
            <span className={styles.or}> Or </span>
            <NavLink to="/login" className={styles.registration}>
              Sign in
            </NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
