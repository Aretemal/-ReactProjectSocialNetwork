import React, { useEffect } from 'react';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { getAllPosts } from '../../store/slices/postSlice';
import { getProfile } from '../../store/slices/profileSlice';
import Profile from './Profile';
import { useAppDispatch, useAppSelector } from '../../hook/hook';

const ProfileContainer: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile(token));
    dispatch(getAllPosts(token));
  }, [dispatch, token]);

  return (
    <Profile />
  );
};
const ProfileWithRedirect = withAuthRedirect(ProfileContainer);
export default ProfileWithRedirect;
