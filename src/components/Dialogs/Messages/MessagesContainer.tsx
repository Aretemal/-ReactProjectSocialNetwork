import React, { useEffect } from 'react';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import {
  addMessage,
  getAllMessages,
  sendMessage, setDialogId,
} from '../../../store/slices/dialogSlice';
import Messages from './Messages';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

const MessagesContainer: React.FC<any> = ({ socket }) => {
  const { messages, activeId } = useAppSelector((state) => state.dialog);
  const { token, authId } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllMessages({ token, id: activeId, socket }));
    socket.on('DIALOG:GET_MESSAGE', (response: any) => {
      console.log(response);
      dispatch(addMessage(response.data.data));
    });
  }, []);

  const onSendMessage = (message: string, id: string) => {
    dispatch(sendMessage({
      token, message, id, socket,
    }));
  };
  const onBack = () => {
    socket.emit('DIALOG:LEAVE_FROM_DIALOG', { id: activeId });
    dispatch(setDialogId(''));
  };

  return (
    <Messages
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
