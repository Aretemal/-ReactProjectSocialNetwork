import classes from './Dialogs.module.css';
import {Message} from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';
import React from 'react';

const Dialogs = (props) => {
  const dialogsElements = props.dialogs
      .map((dialog) =>
        <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
  const messagesElements = props.messages
      .map((message) =>
        <Message key='1' message={message.message}/>);

  const newMessageElement = React.createRef();

  const onAddMessage = () => {
    props.addMessage();
  };
  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.messageChange(text);
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
          <textarea onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}/>
        </div>
        <div>
          <button onClick={onAddMessage}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
