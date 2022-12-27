import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/Dialogs-reducer.js'
import Dialogs from "./Dialogs.jsx";
import React from 'react'


let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        messageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer
