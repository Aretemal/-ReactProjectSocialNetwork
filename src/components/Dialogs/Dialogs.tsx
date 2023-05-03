import React from 'react';
import DialogsNavbarContainer from './DialogList/DialogsListContainer';
import MessagesContainer from './Messages/MessagesContainer';
import { IDialogsProps } from './DialogsInterface';

const Dialogs: React.FC<IDialogsProps> = ({ activeId }) => {
  if (activeId) {
    return <MessagesContainer />;
  }
  return <DialogsNavbarContainer />;
};
export default Dialogs;
