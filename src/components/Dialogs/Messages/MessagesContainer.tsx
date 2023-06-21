import React, { useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import {
  addMessage,
  getAllMessages,
  sendMessage, setActiveDialog, setCountUsers,
} from '../../../store/slices/dialogSlice';
import Messages from './Messages';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

interface MessagesProps{
  socket: Socket,
}
const MessagesContainer: React.FC<MessagesProps> = ({ socket }) => {
  const {
    messages, activeId, senders, usersCount,
  } = useAppSelector((state) => state.dialog);
  const { token, authId } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const onGetMessage = (response: any) => {
    dispatch(addMessage(response.message.data));
  };

  const onSetCountUsers = (response: any) => {
    dispatch(setCountUsers(response.count));
  };

  useEffect(() => {
    dispatch(getAllMessages({
      token, dialogId: activeId, socket, userId: authId,
    }));
    socket.on('DIALOG:SEND_MESSAGE', onGetMessage);
    socket.on('DIALOG:COUNT_USERS', onSetCountUsers);
    return () => {
      socket.off('DIALOG:SEND_MESSAGE', onGetMessage);
      socket.off('DIALOG:COUNT_USERS', onSetCountUsers);
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
      t={t}
      usersCount={usersCount}
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
