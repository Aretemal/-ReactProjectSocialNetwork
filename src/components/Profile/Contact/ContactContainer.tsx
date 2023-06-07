import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';
import { getUsersForProfile } from '../../../store/slices/contactSlice';
import Contact from './Contact';
import styles from './Contact.module.css';
import { setId } from '../../../store/slices/profileSlice';

const ContactContainer: React.FC = () => {
  const { token, authId } = useAppSelector((state) => state.auth);
  const { id } = useAppSelector((state) => state.profile);
  const { friends, subscribers, subscriptions } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (!id) {
      dispatch(getUsersForProfile({ token, id: authId }));
    } else {
      dispatch(getUsersForProfile({ token, id }));
    }
  }, [id]);
  const onUser = ({ profileId, login }: { profileId: string, login: string }) => {
    dispatch(setId(profileId));
    return <Navigate to={`/profile/${login}`} />;
  };

  return (
    <div className={styles.container}>
      <Contact title={t('Friends')} users={friends} onUser={onUser} />
      <Contact title={t('Subscribers')} users={subscribers} onUser={onUser} />
      <Contact title={t('Subscriptions')} users={subscriptions} onUser={onUser} />
    </div>
  );
};
export default ContactContainer;
