import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

function Header({ isAuth, login, logout }) {
  return (
    <div className={classes.header}>
      <img alt='LOGO!!!!' src='data:image/png;base64,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' />
      <div className={classes.loginBlock}>
        {isAuth ? (
          <div>
            {login}
            <button type='submit' onClick={logout}>Log out</button>
          </div>
        )
          : (
            <NavLink to='/login'>
              Login
            </NavLink>
          )}
      </div>
    </div>
  );
}
export default Header;
