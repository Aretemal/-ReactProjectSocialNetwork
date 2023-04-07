/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as connectNameForClasses from 'classnames';
import styles from './DialogNavbar.module.css';
import { DialogUserBoot } from './DialogUser/DialogUserBoot.jsx';

export function DialogsNavbar({
  dialogs, selectDialogs,
}) {
  const defaultStyle = 'd-flex flex-column justify-content-start align-items-start';
  return (
    <div className={
      connectNameForClasses(defaultStyle, styles.container)
    }
    >
      {dialogs.map((item) => (
        <DialogUserBoot
          selectDialogs={selectDialogs}
          key={item.id}
          name={item.attributes.name}
          id={item.id}
        />
      ))}
    </div>
  );
}
