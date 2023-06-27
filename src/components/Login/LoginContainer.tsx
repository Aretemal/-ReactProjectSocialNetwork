import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hook/hook';
import { deleteAllError, deleteError } from '../../store/slices/authSlice';
import Login from './Login';
import { authentication } from '../../store/slices/thunks/authThunks';

const LoginContainer:React.FC = () => {
  const {
    isAuth, authLogin, errors,
  } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(deleteAllError());
  }, [dispatch]);
  const onAuthentication = ({ login, password }: { login: string, password: string}) => {
    dispatch(authentication({ login, password }));
  };
  const onDeleteError = (id: number): void => {
    dispatch(deleteError(id));
  };

  return (
    <Login
      onDeleteError={onDeleteError}
      authLogin={authLogin}
      isAuth={isAuth}
      onAuthentication={onAuthentication}
      APIErrors={errors}
    />
  );
};
export default LoginContainer;
