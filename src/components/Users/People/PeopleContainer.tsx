import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { approve, follow, unfollow } from '../../../store/slices/usersSlice';
import People from './People';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';
import { setId } from '../../../store/slices/profileSlice';

function PeopleContainer() {
  const { users, followingInProgress } = useAppSelector((state) => state.users);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onUnfollow = (id: string) => {
    dispatch(unfollow({ id, token }));
  };
  const onFollow = (id: string) => {
    dispatch(follow({ id, token }));
  };
  const onApprove = (id: string) => {
    dispatch(approve({ id, token }));
  };

  const onUser = ({ profileId, login }: { profileId: string, login: string }) => {
    dispatch(setId(profileId));
    return <Navigate to={`/profile/${login}`} />;
  };
  return (
    <People
      t={t}
      followingInProgress={followingInProgress}
      users={users}
      onUnfollow={onUnfollow}
      onFollow={onFollow}
      onUser={onUser}
      onApprove={onApprove}
    />
  );
}
export default PeopleContainer;
