import React from 'react';
import { DialogUserBoot } from './DialogUser/DialogUserBoot.jsx';
import styles from './DialogNavbar.module.css';

export function DialogsNavbar({
  dialogs, onSetDialogId,
}) {
  return (
    <div className={styles.container}>
      {dialogs.map((item) => (
        <DialogUserBoot
          onSetDialogId={onSetDialogId}
          key={item.id}
          name={item.attributes.name}
          id={item.id}
        />
      ))}
    </div>
  );
}
