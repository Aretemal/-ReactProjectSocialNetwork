import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authentication } from '../../store/slices/authSlice.js';
import { Login } from './Login.jsx';

function LoginContainer() {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onAuthentication = (data) => {
    dispatch(authentication(data));
  };

  return (
    <Login isAuth={isAuth} onAuthentication={onAuthentication} />
  );
}
export default LoginContainer;
