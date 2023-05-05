import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';
import { getUsersForProfile } from '../../../store/slices/contactSlice';
import Contact from './Contact';
import styles from './Contact.module.css';

const ContactContainer: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { friends, subscribers, subscriptions } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersForProfile(token));
  }, []);

  return (
    <div className={styles.container}>
      <Contact title="Your friends" users={friends} />
      <Contact title="Your subscribers" users={subscribers} />
      <Contact title="Your subscriptions" users={subscriptions} />
    </div>
  );
};
export default ContactContainer;
