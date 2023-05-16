import React from 'react';
import { Socket } from 'socket.io-client';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import Dialogs from './Dialogs';
import { useAppSelector } from '../../hook/hook';

interface DialogContainerProps {
  socket: Socket,
}
const DialogContainer: React.FC<DialogContainerProps> = ({ socket }) => {
  const { activeId } = useAppSelector((state) => state.dialog);

  return (
    <Dialogs activeId={activeId} socket={socket} />
  );
};

const DialogsWithRedirect = withAuthRedirect(DialogContainer);
export default DialogsWithRedirect;
