import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css';

function DialogItem({ id, name }) {
  return (
    <div className={classes.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
}
export default DialogItem;
