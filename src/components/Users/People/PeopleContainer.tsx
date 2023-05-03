import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { approve, follow, unfollow } from '../../../store/slices/usersSlice.ts';
import { People } from './People.jsx';

function PeopleContainer() {
  const { users } = useSelector((state) => state.users);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onUnfollow = (id) => {
    dispatch(unfollow({ id, token }));
  };
  const onFollow = (id) => {
    dispatch(follow({ id, token }));
  };
  const onApprove = (id) => {
    dispatch(approve({ id, token }));
  };

  return (
    <People
      users={users}
      onUnfollow={onUnfollow}
      onFollow={onFollow}
      onApprove={onApprove}
    />
  );
}
export default PeopleContainer;
