import React from 'react';
import styles from './Message.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import { IMessageProps } from '../MessagesInterface';

const Message: React.FC<IMessageProps> = ({
  message, senderId, authId, sender,
}) => {
  const itsMe = +senderId === +authId;
  const className = itsMe ? styles.me : styles.user;
  return (
    <div className={`${styles.block} ${className}`}>
      <div className={`${styles.message} ${className}`}>
        <span className={styles.user}>{sender.attributes.login}</span>
        <div className={styles.text}>
          {message}
        </div>
      </div>
      <img className={styles.img} src={DefaultAva} alt="DefaultAva" />
    </div>
  );
};

export default Message;
