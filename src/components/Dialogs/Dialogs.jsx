import React from 'react';
import DialogsNavbarContainer from './DialogNavbar/DialogsNavbarContainer.jsx';
import styles from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer.jsx';

function Dialogs({ activeId }) {
  return (
    <div className={styles.container}>
      {activeId ? <MessagesContainer /> : <DialogsNavbarContainer /> }
    </div>
  );
}
export default Dialogs;
