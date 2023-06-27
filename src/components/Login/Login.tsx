import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import SignInSchema from '../../utils/validators/LoginSchema';
import styles from './Login.module.css';
import BackgroundLogin from '../../assets/images/BackgroundLogin.jpg';
import { IError } from '../../store/slices/interfaces/allInterfaces';

interface IProps {
  onAuthentication: ({ login, password }: { login: string, password: string}) => void, // eslint-disable-line no-unused-vars
  onDeleteError: (id: number) => void, // eslint-disable-line no-unused-vars
  isAuth: boolean,
  authLogin: string,
  APIErrors: IError[],
}
const Login:React.FC<IProps> = ({
  onAuthentication, isAuth, authLogin, APIErrors, onDeleteError,
}) => {
  if (isAuth) {
    return <Navigate to={`/profile/${authLogin}`} />;
  }
  let i = 0;
  return (
    <div className={styles.container}>
      <img className={styles.backgroundTree} src={BackgroundLogin} alt="BackgroundLogin" />
      { APIErrors ? APIErrors.map((error) => {
        i += 1;
        return <div key={i} className={styles['block-error']} onClick={() => onDeleteError(i - 1)}>{error.detail}</div>;
      }) : null}
      <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={(values) => {
          onAuthentication({ login: values.login, password: values.password });
        }}
        validationSchema={SignInSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h1 className={styles.title}>Sign in</h1>
            <div className={styles['form-item']}>
              <Field
                className={styles.field}
                placeholder="Your login"
                name="login"
              />
              {errors.login && touched.login ? (
                <div className={styles.error}>{errors.login}</div>
              ) : null}
            </div>
            <div className={styles['form-item']}>
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
                  (!!(errors.login && touched.login)
                    || !!(errors.password && touched.password))
                }
              className={styles.button}
              type="submit"
            >
              Sign in
            </button>
            <span className={styles.or}> Or </span>
            <NavLink to="/registration" className={styles.registration}>
              Registration
            </NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
