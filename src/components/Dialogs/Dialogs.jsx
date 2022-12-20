import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state.js'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message.jsx'
import DialogItem from './DialogItem/DialogItem.jsx'

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs
    .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  const messagesElements = props.dialogsPage.messages
    .map(message => <Message key='1' message={message.message}/>)

  const newMessageElement = React.createRef()

  const addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }
  const onMessageChange = () => {
    const text = newMessageElement.current.value
    const action = updateNewMessageTextActionCreator(text)
    props.dispatch(action)
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
export default Dialogs
