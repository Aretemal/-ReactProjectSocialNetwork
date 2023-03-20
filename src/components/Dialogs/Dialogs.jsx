import React from 'react';
// import { Navigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as connectNameForClasses from 'classnames';
import { DialogsNavbarBoot } from './DialogNavbar/DialogsNavbarBoot.jsx';
import styles from './Dialogs.module.css';
import { MessagesBoot } from './Messages/MessagesBoot.jsx';

function Dialogs({
  dialogs, messages, addMessage, activeId,
}) {
  // if (!isAuth) return <Navigate to='/login' />;

  const addNewMessage = (newMessageBody) => {
    addMessage(newMessageBody);
  };

  return (
    <div className={styles.container}>
      <DialogsNavbarBoot items={dialogs} activeId={activeId} className={styles.dialogs} />
      <div className={styles.messages}>
        <MessagesBoot items={messages} className={styles.messages} />
        <Formik
          initialValues={{ newMessageBody: '' }}
          onSubmit={(values) => {
            addNewMessage(values.newMessageBody);
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
                className={connectNameForClasses('btn', styles.ButtonBoot)}
                type='submit'
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Dialogs;
