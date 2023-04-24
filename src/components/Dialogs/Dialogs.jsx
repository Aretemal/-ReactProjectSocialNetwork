import React from 'react';
import DialogsNavbarContainer from './DialogNavbar/DialogsNavbarContainer.jsx';
import MessagesContainer from './Messages/MessagesContainer.jsx';

function Dialogs({ activeId }) {
  if (activeId) {
    return <MessagesContainer />;
  }
  return <DialogsNavbarContainer />;
}
export default Dialogs;
