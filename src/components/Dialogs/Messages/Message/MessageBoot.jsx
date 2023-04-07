/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as connectNameForClasses from 'classnames';
import styles from './MessageBoot.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';

export function MessageBoot({ message, senderId, authId }) {
  senderId = +senderId;
  authId = +authId;
  const defaultStyle = 'mb-3 justify-content-center';
  if (senderId === authId) {
    return (
      <div className={styles.authSender}>
        <div
          className={connectNameForClasses(defaultStyle, styles.authMessage)}
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
        className={connectNameForClasses(defaultStyle, styles.message)}
      >
        {message}
      </div>
    </div>
  );
}
