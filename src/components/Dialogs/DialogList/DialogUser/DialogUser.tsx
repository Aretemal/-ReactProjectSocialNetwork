import React from 'react';
import styles from './DialogUser.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import { IDialogUserProps } from '../DialogsListInterface';

const DialogUser: React.FC<IDialogUserProps> = ({
  id, name, onSetDialogId,
}) => (
  <div
    className={styles.container}
    onClick={() => {
      onSetDialogId(id);
    }}
  >
    <img className={styles.ava} src={DefaultAva} alt="AVA" />
    <span className='ms-3 fs-5 text-dark'>
      {`${name}`}
    </span>
  </div>
);

export default DialogUser;
