import React from 'react';
import { useParams } from 'react-router-dom';
import { updateStatus } from '../../../store/slices/profileSlice';
import ProfileInfo from './ProfileInfo';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

const ProfileInfoContainer: React.FC = () => {
  const { profile } = useAppSelector((state) => state.profile);
  const { token, authLogin } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const params = useParams();
  const onUpdateStatus = (status: string) => {
    dispatch(updateStatus({ status, token }));
  };

  return (
    <ProfileInfo
      isAuthProfile={authLogin === params.login}
      profile={profile}
      onUpdateStatus={onUpdateStatus}
    />
  );
};
export default ProfileInfoContainer;
