import React from 'react';
import { registration } from '../../store/slices/authSlice';
import Registration from './Registration';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { IOnRegistration } from './RegistrationInterface';

const RegistrationContainer: React.FC = () => {
  const { isAuth, authLogin } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onRegistration = (data: IOnRegistration) => {
    dispatch(registration(data));
  };

  return (
    <Registration authLogin={authLogin} isAuth={isAuth} onRegistration={onRegistration} />
  );
};
export default RegistrationContainer;
