import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/state.js";
import classes from './Dialogs.module.css';
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

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
                          value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;