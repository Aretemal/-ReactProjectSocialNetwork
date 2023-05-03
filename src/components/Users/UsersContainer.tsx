import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import { requestUsers } from '../../store/slices/usersSlice.ts';
import Users from './Users.jsx';

function UsersContainer() {
  const { pageSize, currentPage } = useSelector((state) => state.users);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers({ currentPage, pageSize, token }));
  }, [dispatch]);

  return (
    <Users />
  );
}
const UsersWithRedirect = withAuthRedirect(UsersContainer);
export default UsersWithRedirect;
