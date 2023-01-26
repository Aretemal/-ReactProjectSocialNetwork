import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import classes from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';

function AddMessageForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder='Enter your message'
        />
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

function Dialogs({
  dialogs, messages, addMessage, isAuth,
}) {
  const dialogsElements = dialogs
    .map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);
  const messagesElements = messages
    .map((message) => <Message key='1' message={message.message} />);

  if (!isAuth) return <Navigate to='/login' />;

  const addNewMessage = (e) => {
    addMessage(e.newMessageBody);
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
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

export default Dialogs;
