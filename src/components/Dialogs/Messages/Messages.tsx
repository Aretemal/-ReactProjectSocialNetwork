import React, { useEffect } from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';
import { IMessagesProps } from './MessagesInterface';
import Header from './Header/Header';
import FormDialog from './FormDialog/FormDialog';

const Messages: React.FC<IMessagesProps> = ({
  messages,
  onSendMessage,
  authId,
  activeId,
  onBack,
  senders,
  usersCount,
  t,
}) => {
  useEffect(() => {
    const offsetY = document.getElementById('target');
    if (offsetY) {
      window.scrollTo(0, offsetY.offsetTop);
    }
  }, [messages]);
  return (
    <div className={styles.wrap}>
      <div className={styles.top} />
      <Header usersCount={usersCount} onBack={onBack} t={t} />
      <div className={styles.messages}>
        {messages.map((item, index) => {
          const sender = senders.find((u) => u.id === `${item.attributes.senderId}`);
          if (!sender) return null;
          return (
            <Message
              index={index}
              length={messages.length}
              sender={sender}
              key={item.id}
              message={item.attributes.message}
              authId={authId}
              senderId={item.attributes.senderId}
            />
          );
        })}
      </div>
      <FormDialog activeId={activeId} onSendMessage={onSendMessage} t={t} />
      <div className={styles.bottom} id="target" />
    </div>
  );
};

export default Messages;
