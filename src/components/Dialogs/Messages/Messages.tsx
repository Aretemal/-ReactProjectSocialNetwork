import { Field, Form, Formik } from 'formik';
import React from 'react';
import MessageSchema from '../../../utils/validators/MessageSchema';
import styles from './Messages.module.css';
import Message from './Message/Message';
import { IMessagesProps } from './MessagesInterface';

const Messages: React.FC<IMessagesProps> = ({
  messages,
  onSendMessage,
  authId,
  activeId,
  onBack,
  senders,
}) => (
  <div className={styles.wrap}>
    <div className={styles.header}>
      <div className={styles.title}>Dialog name</div>
      <div className={styles.users}> users online</div>
      <button
        className={styles.left}
        onClick={onBack}
        type='submit'
      >
        Exit
      </button>
    </div>
    <div className={styles.messages}>
      {messages.map((item) => {
        const sender = senders.find((u) => u.id === `${item.attributes.senderId}`);
        if (!sender) return null;
        return (
          <Message
            sender={sender}
            key={item.id}
            message={item.attributes.message}
            authId={authId}
            senderId={item.attributes.senderId}
          />
        );
      })}
    </div>
    <Formik
      initialValues={{ newMessageBody: '' }}
      onSubmit={(values, { resetForm }) => {
        onSendMessage(values.newMessageBody, activeId);
        resetForm();
      }}
      validationSchema={MessageSchema}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <Field
            as="textarea"
            className={styles.input}
            name="newMessageBody"
            placeholder='Enter text ...'
          />
          <button
            disabled={!!(errors.newMessageBody && touched.newMessageBody)}
            className={styles.button}
            type='submit'
          >
            Send a message
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Messages;
