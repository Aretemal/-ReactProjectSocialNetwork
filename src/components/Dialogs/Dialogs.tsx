import React from 'react';
import DialogsNavbarContainer from './DialogList/DialogsListContainer';
import MessagesContainer from './Messages/MessagesContainer';
import { IDialogsProps } from './DialogsInterface';

const Dialogs: React.FC<IDialogsProps> = ({ activeId, socket }) => {
  if (activeId) {
    return <MessagesContainer socket={socket} />;
  }
  return <DialogsNavbarContainer />;
};
export default Dialogs;
