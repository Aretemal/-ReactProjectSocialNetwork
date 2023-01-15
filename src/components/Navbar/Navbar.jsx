import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to="/profile" className={classes.item}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={classes.item}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="#" className={classes.item}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="#" className={classes.item}>Music</NavLink>
      </div>
      <div>
        <NavLink to="#" className={classes.item}>
          Settings
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" className={classes.item}>
          Find users
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
