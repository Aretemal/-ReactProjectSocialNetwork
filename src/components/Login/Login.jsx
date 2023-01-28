import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls.jsx';
import classes from './Login.module.css';
import style from '../common/FormsControls/FormControls.module.css';

const maxLength30 = maxLengthCreator(30);

function LoginForm({ handleSubmit, error }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field type="text" validate={[required, maxLength30]} placeholder="Email" name='email' component={Input} />
      </div>
      <div>
        <Field type="password" validate={[required, maxLength30]} placeholder="Password" name="password" component={Input} />
      </div>
      <div className={classes.name}>
        <Field type="checkbox" name='rememberMe' component='input' />
        remember me
      </div>
      {error && (
      <div className={style.formSummaryError}>
        {error}
      </div>
      )}
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
}

const ReduxLoginForm = reduxForm({
  form: 'login',
})(LoginForm);
export function Login({ login, isAuth }) {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  };
  if (isAuth) {
    return <Navigate to='/profile' />;
  }
  return (
    <div>
      <h1 className={classes.name}>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
}
