//  import React from 'react';
import {connect} from 'react-redux'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/Dialogs-reducer.js'
import Dialogs from './Dialogs.jsx'

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageText: state.dialogsPage.newMessageText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    messageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    },
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
