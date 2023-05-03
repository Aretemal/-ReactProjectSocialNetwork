import React from 'react';
import { updateStatus } from '../../../store/slices/profileSlice';
import ProfileInfo from './ProfileInfo';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

const ProfileInfoContainer: React.FC = () => {
  const { profile } = useAppSelector((state) => state.profile);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const onUpdateStatus = (status: string) => {
    dispatch(updateStatus({ status, token }));
  };

  return (
    <ProfileInfo profile={profile} onUpdateStatus={onUpdateStatus} />
  );
};
export default ProfileInfoContainer;
