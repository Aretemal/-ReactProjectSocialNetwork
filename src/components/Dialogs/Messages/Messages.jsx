/* eslint-disable react/jsx-props-no-spreading */
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as connectNameForClasses from 'classnames';
import styles from './Messages.module.css';
import { MessageBoot } from './Message/MessageBoot.jsx';
import SendIcon from '../../../assets/images/icons/SendIcon.png';

class Messages extends React.Component {
  componentDidMount() {
    const { getAllMessage, token, activeId } = this.props;
    getAllMessage(token, activeId);
  }

  render() {
    const {
      messages,
      sendMessage,
      authId,
      activeId,
      token,
    } = this.props;
    const defaultStyle = 'pt-3 ps-5 pe-5';
    return (
      <div className={styles.messages}>
        <div className={
          connectNameForClasses(defaultStyle, styles.container)
        }
        >
          {messages.map((item) => (
            <MessageBoot
              key={item.id}
              message={item.attributes.message}
              authId={authId}
              senderId={item.attributes.senderId}
            />
          ))}
        </div>
        <Formik
          initialValues={{ newMessageBody: '' }}
          onSubmit={(values) => {
            sendMessage(token, activeId, values.newMessageBody);
          }}
        >
          {() => (
            <Form className={styles.form}>
              <Field
                as="textarea"
                className={styles.field}
                name="newMessageBody"
              />
              <button
                className={styles.ButtonBoot}
                type='submit'
              >
                <img
                  className={styles.SendIcon}
                  src={SendIcon}
                  alt="SendIcon"
                />
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default Messages;
