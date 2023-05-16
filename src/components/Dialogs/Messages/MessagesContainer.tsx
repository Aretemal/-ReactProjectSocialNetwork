import React, { useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import {
  addMessage,
  getAllMessages,
  sendMessage, setActiveDialog,
} from '../../../store/slices/dialogSlice';
import Messages from './Messages';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

interface MessagesProps{
  socket: Socket,
}
const MessagesContainer: React.FC<MessagesProps> = ({ socket }) => {
  const { messages, activeId, senders } = useAppSelector((state) => state.dialog);
  const { token, authId } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const onGetMessage = (response: any) => {
    dispatch(addMessage(response.message.data));
  };

  useEffect(() => {
    dispatch(getAllMessages({
      token, dialogId: activeId, socket, userId: authId,
    }));
    socket.on('DIALOG:SEND_MESSAGE', onGetMessage);
    return () => {
      socket.off('DIALOG:SEND_MESSAGE', onGetMessage);
    };
  }, []);

  const onSendMessage = (message: string, id: string) => {
    dispatch(sendMessage({
      token, message, id, socket,
    }));
  };
  const onBack = () => {
    socket.emit('DIALOG:LEAVE_DIALOG', { dialogId: activeId, userId: authId });
    dispatch(setActiveDialog(''));
  };

  return (
    <Messages
      senders={senders}
      activeId={activeId}
      messages={messages}
      authId={authId}
      onSendMessage={onSendMessage}
      onBack={onBack}
    />
  );
};

const MessagesWithRedirect = withAuthRedirect(MessagesContainer);
export default MessagesWithRedirect;
