import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../store/slices/authSlice.js';
import { Registration } from './Registration.jsx';

export function RegistrationContainer() {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onRegistration = (data) => {
    dispatch(registration(data));
  };

  return (
    <Registration isAuth={isAuth} onRegistration={onRegistration} />
  );
}
export default RegistrationContainer;
