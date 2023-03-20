/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as connectNameForClasses from 'classnames';
import styles from './MessageBoot.module.css';

export function MessageBoot({ message, sender }) {
  const defaultStyle = 'mb-3 justify-content-center';
  return (
    <div className={sender === 'I' ? 'd-flex flex-row-reverse'
      : 'flex-row d-flex'}
    >
      <div
        className={connectNameForClasses(defaultStyle, styles.message)}
      >
        {message}
      </div>
    </div>
  );
}
