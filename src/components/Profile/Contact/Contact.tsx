/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { IUser } from '../../../store/slices/interfaces/contactInterface';
import ContactItem from './ContactItem/ContactItem';
import styles from './Contact.module.css';

interface IProps {
    users: IUser[],
    title: string,
    onUser: ({ profileId, login }: { profileId: string, login: string }) => any,
}

const Contact: React.FC<IProps> = ({ title, users, onUser }) => (
  <div className={styles.contactItem}>
    <div className={styles.title}>{title}</div>
    <hr className={styles.line} />
    <div className={styles.items}>
      {users.map((user: IUser) => (
        <ContactItem
          key={user.id}
          id={user.id}
          onUser={onUser}
          firstName={user.attributes.firstName}
          lastName={user.attributes.lastName}
          login={user.attributes.login}
        />
      ))}
    </div>
  </div>
);
export default Contact;
