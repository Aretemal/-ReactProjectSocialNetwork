import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/Dialogs-reducer.js'
import Dialogs from "./Dialogs.jsx";
import React from 'react'

const DialogsContainer = (props) => {
    let state = props.store.getState();
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onMessageChange = (text) => {
        const action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (<Dialogs
        addMessage={addMessage}
        messageChange={onMessageChange}
        messages={state.dialogsPage.messages}
        dialogs={state.dialogsPage.dialogs}
        newMessageText={state.dialogsPage.newMessageText}
    />)
}

export default DialogsContainer
