import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";
const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages
        .map(message => <Message message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;