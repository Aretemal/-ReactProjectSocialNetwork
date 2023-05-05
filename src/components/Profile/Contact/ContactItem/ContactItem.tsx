import React from 'react';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import styles from '../Contact.module.css';

interface IProps {
    firstName: string,
    lastName: string,
}
const ContactItem: React.FC<IProps> = ({ firstName, lastName }) => (
  <div className={styles.itemContainer}>
    <img className={styles.ava} src={DefaultAva} alt="ava" />
    <span>{`${firstName} ${lastName}`}</span>
  </div>
);
export default ContactItem;
