import React from 'react';
import styles from './Message.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';

export function Message({ message, senderId, authId }) {
  senderId = +senderId;
  authId = +authId;
  if (senderId === authId) {
    return (
      <div className={styles.authSender}>
        <div
          className={styles.authMessage}
        >
          {message}
        </div>
        <img className={styles.authAva} src={DefaultAva} alt="DefaultAva" />
      </div>
    );
  }
  return (
    <div className={styles.otherSender}>
      <img className={styles.ava} src={DefaultAva} alt="DefaultAva" />
      <div
        className={styles.message}
      >
        {message}
      </div>
    </div>
  );
}
