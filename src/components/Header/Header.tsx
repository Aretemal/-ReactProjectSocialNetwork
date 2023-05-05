import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import ProfileIcon from '../../assets/images/icons/ProfileIcon.png';
import SettingsIcon from '../../assets/images/icons/SettingsIcon.png';
import FindUsersIcon from '../../assets/images/icons/FindUsersIcon.png';
import MusicIcon from '../../assets/images/icons/MusicIcon.png';
import NewsIcon from '../../assets/images/icons/NewsIcon.png';
import MessagesIcon from '../../assets/images/icons/MessagesIcon.png';
import { useAppSelector } from '../../hook/hook';

const Header:React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  if (isAuth) {
    return (
      <div className={styles.nav}>
        <NavLink to="/profile" className={styles.item}>
          <img className={styles.icon} src={ProfileIcon} alt="ProfileIcon" />
        </NavLink>
        <NavLink to="/dialogs" className={styles.item}>
          <img className={styles.icon} src={MessagesIcon} alt="MessagesIcon" />
        </NavLink>
        <NavLink to="#" className={styles.item}>
          <img className={styles.icon} src={NewsIcon} alt="NewsIcon" />
        </NavLink>
        <NavLink to="#" className={styles.item}>
          <img className={styles.icon} src={MusicIcon} alt="MusicIcon" />
        </NavLink>
        <NavLink to="#" className={styles.item}>
          <img className={styles.icon} src={SettingsIcon} alt="SettingsIcon" />
        </NavLink>
        <NavLink to="/users" className={styles.item}>
          <img className={styles.icon} src={FindUsersIcon} alt="FindUsersIcon" />
        </NavLink>
      </div>
    );
  } return <div />;
};
export default Header;
