/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import styles from '../Contact.module.css';

interface IProps {
    firstName: string,
    lastName: string,
    onUser: ({ profileId, login }: { profileId: string, login: string }) => any,
    id: string,
    login: string,
}
const ContactItem: React.FC<IProps> = ({
  firstName, lastName, id, onUser, login,
}) => (
  <div className={styles.itemContainer}>
    <NavLink to={`/profile/${login}`} onClick={() => onUser({ profileId: id, login })}>
      <img className={styles.ava} src={DefaultAva} alt="ava" />
    </NavLink>
    <div>{`${firstName} ${lastName}`}</div>
  </div>
);
export default ContactItem;
