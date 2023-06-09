import React from 'react';
import styles from './Message.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import { IMessageProps } from '../MessagesInterface';

const Message: React.FC<IMessageProps> = ({
  message, senderId, authId, sender, index, length,
}) => {
  const itsMe = +senderId === +authId;
  const className = itsMe ? styles.me : styles.user;
  const classNameUser = itsMe ? null : styles.otherUser;
  const id = index + 1 === length ? 'target' : `${message}`;
  return (
    <div className={`${styles.block} ${className} ${classNameUser}`} id={id}>
      { !itsMe ? <img className={styles.img} src={DefaultAva} alt="DefaultAva" /> : null}
      <div className={`${styles.message} ${className}`}>
        <span className={styles.user}>{sender.attributes.login}</span>
        <div className={styles.text}>
          {message}
        </div>
      </div>
      { itsMe ? <img className={styles.img} src={DefaultAva} alt="DefaultAva" /> : null}
    </div>
  );
};

export default Message;
