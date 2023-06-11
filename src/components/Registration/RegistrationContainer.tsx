import React, { useEffect } from 'react';
import { deleteAllError, deleteError, registration } from '../../store/slices/authSlice';
import Registration from './Registration';
import { useAppDispatch, useAppSelector } from '../../hook/hook';

const RegistrationContainer: React.FC = () => {
  const { isAuth, authLogin, errors } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(deleteAllError());
  }, [dispatch]);
  const onRegistration = ({
    login, firstName, lastName, password, email,
  }:
    { login: string, firstName: string, lastName: string, password: string, email: string }) => {
    dispatch(registration({
      login, firstName, lastName, password, email,
    }));
  };
  const onDeleteError = (id: number): void => {
    dispatch(deleteError(id));
  };

  return (
    <Registration
      onDeleteError={onDeleteError}
      authLogin={authLogin}
      isAuth={isAuth}
      onRegistration={onRegistration}
      APIErrors={errors}
    />
  );
};
export default RegistrationContainer;
