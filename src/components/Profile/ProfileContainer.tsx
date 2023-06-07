import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { getAllPosts } from '../../store/slices/postSlice';
import { getProfile } from '../../store/slices/profileSlice';
import Profile from './Profile';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { getLang } from '../../store/slices/settingsSlice';

const ProfileContainer: React.FC = () => {
  const { token, authId } = useAppSelector((state) => state.auth);
  const { lang } = useAppSelector((state) => state.settings);
  const { id } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!id) {
      dispatch(getProfile({ token, id: authId }));
      dispatch(getAllPosts({ token, id: authId }));
      dispatch(getLang(token));
    } else if (id === authId) {
      dispatch(getProfile({ token, id: authId }));
      dispatch(getAllPosts({ token, id: authId }));
      dispatch(getLang(token));
    } else {
      dispatch(getProfile({ token, id }));
      dispatch(getAllPosts({ token, id }));
      dispatch(getLang(token));
    }
  }, [id]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Profile />
  );
};
const ProfileWithRedirect = withAuthRedirect(ProfileContainer);
export default ProfileWithRedirect;
