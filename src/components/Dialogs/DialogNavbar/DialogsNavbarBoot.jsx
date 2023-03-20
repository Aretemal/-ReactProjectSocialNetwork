/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as connectNameForClasses from 'classnames';
import styles from './DialogNavbarBoot.module.css';
import { DialogUserBoot } from './DialogUser/DialogUserBoot.jsx';

export function DialogsNavbarBoot({ items, activeId }) {
  const defaultStyle = 'd-flex flex-column justify-content-start align-items-start';
  return (
    <div className={
      connectNameForClasses(defaultStyle, styles.container)
}
    >
      {items.map((item) => (
        <DialogUserBoot
          key={item.id}
          name={`${item.firstName} ${item.lastName}`}
          id={item.id}
          ava={item.ava}
          activeId={activeId}
        />
      ))}
    </div>
  );
}
