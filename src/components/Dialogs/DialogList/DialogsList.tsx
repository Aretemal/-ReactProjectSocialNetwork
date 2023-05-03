import React from 'react';
import DialogUser from './DialogUser/DialogUser';
import styles from './DialogsList.module.css';
import { IDialogsListProps } from './DialogsListInterface';

const DialogsList : React.FC<IDialogsListProps> = ({
  dialogs, onSetDialogId,
}) => (
  <div className={styles.container}>
    {dialogs.map((item) => (
      <DialogUser
        onSetDialogId={onSetDialogId}
        key={item.id}
        name={item.attributes.name}
        id={item.id}
      />
    ))}
  </div>
);

export default DialogsList;
