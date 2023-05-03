import React from 'react';
import { useSelector } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import Dialogs from './Dialogs.jsx';

function DialogContainer() {
  const { activeId } = useSelector((state) => state.dialog);

  return (
    <Dialogs activeId={activeId} />
  );
}

const DialogsWithRedirect = withAuthRedirect(DialogContainer);
export default DialogsWithRedirect;
