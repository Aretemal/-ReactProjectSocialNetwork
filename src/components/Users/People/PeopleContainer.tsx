import React from 'react';
import { approve, follow, unfollow } from '../../../store/slices/usersSlice';
import People from './People';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

function PeopleContainer() {
  const { users } = useAppSelector((state) => state.users);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onUnfollow = (id: string) => {
    dispatch(unfollow({ id, token }));
  };
  const onFollow = (id: string) => {
    dispatch(follow({ id, token }));
  };
  const onApprove = (id: string) => {
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
