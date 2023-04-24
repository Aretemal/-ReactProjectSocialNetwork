import { Field, Form, Formik } from 'formik';
import React from 'react';
import SendPost from '../../../assets/images/icons/SendPost.png';
import MessageSchema from '../../../utils/validators/MessageSchema.js';
import styles from './Messages.module.css';
import { Message } from './Message/Message.jsx';

function Messages({
  messages,
  onSendMessage,
  authId,
  activeId,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {messages.map((item) => (
          <Message
            key={item.id}
            message={item.attributes.message}
            authId={authId}
            senderId={item.attributes.senderId}
          />
        ))}
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
              className={styles.field}
              name="newMessageBody"
              placeholder='Enter text ...'
            />
            <button
              disabled={errors.newMessageBody && touched.newMessageBody}
              className={styles.but}
              type='submit'
            >
              <img
                className={styles['send-icon']}
                src={SendPost}
                alt='send'
              />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Messages;
