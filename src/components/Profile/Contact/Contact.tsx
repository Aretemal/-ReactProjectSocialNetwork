import React from 'react';
import { IUser } from '../../../store/slices/interfaces/contactInterface';
import ContactItem from './ContactItem/ContactItem';
import styles from './Contact.module.css';

interface IProps {
    users: IUser[],
    title: string,
}

const Contact: React.FC<IProps> = ({ title, users }) => (
  <div className={styles.contactItem}>
    <div className={styles.title}>{title}</div>
    <hr className={styles.line} />
    <div className={styles.items}>
      {users.map((user: IUser) => (
        <ContactItem
          key={user.id}
          firstName={user.attributes.firstName}
          lastName={user.attributes.lastName}
        />
      ))}
    </div>
  </div>
);
export default Contact;
