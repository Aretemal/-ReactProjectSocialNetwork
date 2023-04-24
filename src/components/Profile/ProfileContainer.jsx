import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import { getAllPosts } from '../../store/slices/postSlice.js';
import { getProfile } from '../../store/slices/profileSlice.js';
import Profile from './Profile.jsx';

function ProfileContainer() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(token));
    dispatch(getAllPosts(token));
  }, [dispatch, token]);

  return (
    <Profile />
  );
}
const ProfileWithRedirect = withAuthRedirect(ProfileContainer);
export default ProfileWithRedirect;
