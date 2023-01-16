import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';

function Dialogs({
  dialogs, messages, addMessage, messageChange, newMessageText,
}) {
  const dialogsElements = dialogs
    .map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);
  const messagesElements = messages
    .map((message) => <Message key='1' message={message.message} />);

  const newMessageElement = React.createRef();

  const onAddMessage = () => {
    addMessage();
  };
  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    messageChange(text);
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
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={newMessageText}
          />
        </div>
        <div>
          <button onClick={onAddMessage}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
