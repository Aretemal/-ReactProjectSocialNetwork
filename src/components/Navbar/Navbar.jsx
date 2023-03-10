import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import ProfileIcon from '../../assets/images/icons/ProfileIcon.png';
import SettingsIcon from '../../assets/images/icons/SettingsIcon.png';
import FindUsersIcon from '../../assets/images/icons/FindUsersIcon.png';
import MusicIcon from '../../assets/images/icons/MusicIcon.png';
import NewsIcon from '../../assets/images/icons/NewsIcon.png';
import MessagesIcon from '../../assets/images/icons/MessagesIcon.png';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div />
      <div className={styles.navLink}>
        <img className={styles.icon} src={ProfileIcon} alt="ProfileIcon" />
        <NavLink to="/profile" className={styles.item}>
          Profile
        </NavLink>
      </div>
      <div className={styles.navLink}>
        <img className={styles.icon} src={MessagesIcon} alt="MessagesIcon" />
        <NavLink to="/dialogs" className={styles.item}>
          Messages
        </NavLink>
      </div>
      <div className={styles.navLink}>
        <img className={styles.icon} src={NewsIcon} alt="NewsIcon" />
        <NavLink to="#" className={styles.item}>
          News
        </NavLink>
      </div>
      <div className={styles.navLink}>
        <img className={styles.icon} src={MusicIcon} alt="MusicIcon" />
        <NavLink to="#" className={styles.item}>
          Music
        </NavLink>
      </div>
      <div className={styles.navLink}>
        <img className={styles.icon} src={SettingsIcon} alt="SettingsIcon" />
        <NavLink to="#" className={styles.item}>
          Settings
        </NavLink>
      </div>
      <div className={styles.navLink}>
        <img className={styles.icon} src={FindUsersIcon} alt="FindUsersIcon" />
        <NavLink to="/users" className={styles.item}>
          Find users
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
