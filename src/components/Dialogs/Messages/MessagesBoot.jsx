/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as connectNameForClasses from 'classnames';
import styles from './MessagesBoot.module.css';
import { MessageBoot } from './Message/MessageBoot.jsx';

export function MessagesBoot({ items }) {
  const defaultStyle = 'pt-3 ps-5 pe-5';
  return (
    <div className={
      connectNameForClasses(defaultStyle, styles.container)
    }
    >
      {items.map((item) => (
        <MessageBoot
          key={item.id}
          message={item.message}
          sender={item.sender}
        />
      ))}
    </div>
  );
}
