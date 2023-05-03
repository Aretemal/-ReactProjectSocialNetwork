import React, { useEffect } from 'react';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import {
  getAllMessages,
  sendMessage,
} from '../../../store/slices/dialogSlice';
import Messages from './Messages';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

const MessagesContainer: React.FC = () => {
  const { messages, activeId } = useAppSelector((state) => state.dialog);
  const { token, authId } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllMessages({ token, id: activeId }));
  }, [dispatch]);

  const onSendMessage = (message: string, id: string) => {
    dispatch(sendMessage({ token, message, id }));
  };

  return (
    <Messages
      activeId={activeId}
      messages={messages}
      authId={authId}
      onSendMessage={onSendMessage}
    />
  );
};

const MessagesWithRedirect = withAuthRedirect(MessagesContainer);
export default MessagesWithRedirect;
