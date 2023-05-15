import React from 'react';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import Dialogs from './Dialogs';
import { useAppSelector } from '../../hook/hook';

const DialogContainer: React.FC<any> = ({ socket }) => {
  const { activeId } = useAppSelector((state) => state.dialog);

  return (
    <Dialogs activeId={activeId} socket={socket} />
  );
};

const DialogsWithRedirect = withAuthRedirect(DialogContainer);
export default DialogsWithRedirect;
