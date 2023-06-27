import React, { useEffect } from 'react';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { requestUsers } from '../../store/slices/thunks/usersThunks';
import Users from './Users';
import { useAppDispatch, useAppSelector } from '../../hook/hook';

const UsersContainer: React.FC = () => {
  const { pageSize, currentPage } = useAppSelector((state) => state.users);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestUsers({ currentPage, pageSize, token }));
  }, [dispatch]);

  return (
    <Users />
  );
};
const UsersWithRedirect = withAuthRedirect(UsersContainer);
export default UsersWithRedirect;
