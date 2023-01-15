//  import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/Dialogs-reducer';
import Dialogs from './Dialogs.jsx';

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  dialogs: state.dialogsPage.dialogs,
  newMessageText: state.dialogsPage.newMessageText,
});
const mapDispatchToProps = (dispatch) => ({
  addMessage: () => {
    dispatch(addMessageActionCreator());
  },
  messageChange: (text) => {
    dispatch(updateNewMessageTextActionCreator(text));
  },
});
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
