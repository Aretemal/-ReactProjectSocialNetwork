import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

function Header({ isAuth, logout }) {
  return (
    <div className={styles.header}>
      <img className={styles.logo} alt='logo' src={logo} />
      <div className={styles.block}>
        {isAuth ? (
          <div className={styles.logout} onClick={logout}>
            Log out
          </div>
        )
          : (
            <NavLink className={styles.login} to='/login'>
              Login
            </NavLink>
          )}
        <NavLink className={styles.registration} to='/registration'>
          Registration
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
