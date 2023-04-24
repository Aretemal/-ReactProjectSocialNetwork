import React from 'react';
import styles from './DialogUserBoot.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';

export function DialogUserBoot({
  id, name, onSetDialogId,
}) {
  return (
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
}
