import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import classes from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';

function Dialogs({
  dialogs, messages, addMessage, isAuth,
}) {
  const dialogsElements = dialogs
    .map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);
  const messagesElements = messages
    .map((message) => <Message key='1' message={message.message} />);

  if (!isAuth) return <Navigate to='/login' />;

  const addNewMessage = (newMessageBody) => {
    addMessage(newMessageBody);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        {dialogsElements}
      </div>
      <div>
        <div className={classes.messages}>
          {messagesElements}
        </div>
        <Formik
          initialValues={{ newMessageBody: '' }}
          onSubmit={(values) => {
            addNewMessage(values.newMessageBody);
          }}
        >
          {() => (
            <Form>
              <Field
                name="newMessageBody"
              />
              <button type="submit">
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
