import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Login.module.css';

function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field type="text" placeholder="Login" name='login' component='input' />
      </div>
      <div>
        <Field type="text" placeholder="Password" name="password" component='input' />
      </div>
      <div className={classes.name}>
        <Field type="checkbox" name='remember me' component='input' />
        remember me
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
}
const ReduxLoginForm = reduxForm({
  form: 'login',
})(LoginForm);
function Login() {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1 className={classes.name}>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
}
export default Login;
