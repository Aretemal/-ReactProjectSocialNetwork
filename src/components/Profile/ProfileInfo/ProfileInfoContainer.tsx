import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus } from '../../../store/slices/profileSlice.ts';
import ProfileInfo from './ProfileInfo.jsx';

function ProfileInfoContainer() {
  const { profile } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onUpdateStatus = (status) => {
    dispatch(updateStatus({ status, token }));
  };

  return (
    <ProfileInfo profile={profile} onUpdateStatus={onUpdateStatus} />
  );
}
export default ProfileInfoContainer;
