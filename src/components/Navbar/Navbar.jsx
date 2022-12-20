import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return <nav className={classes.nav}>
    <div >
      <NavLink to="/profile" className={classes.item}>Profile
      </NavLink>
    </div>
    <div >
      <NavLink to ="/dialogs" className={classes.item} >Messages
      </NavLink>
      </div>
    <div >
      <NavLink to="#" className={classes.item} >News
      </NavLink>
      </div>
    <div >
      <NavLink to="#" className={classes.item}>Music</NavLink>
      </div>
    <div >
      <NavLink to="#" className={classes.item}>Settings
      </NavLink>
      </div>
  </nav>
}
export default Navbar
