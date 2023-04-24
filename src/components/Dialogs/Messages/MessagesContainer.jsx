import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect.jsx';
import {
  getAllMessages,
  sendMessage,
} from '../../../store/slices/dialogSlice.js';
import Messages from './Messages.jsx';

function MessagesContainer() {
  const { messages, activeId } = useSelector((state) => state.dialog);
  const { token, authId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMessages({ token, id: activeId }));
  }, [dispatch]);

  const onSendMessage = (message, id) => {
    dispatch(sendMessage({ token, message, id }));
  };

  return (
    <Messages
      activeId={activeId}
      messages={messages}
      token={token}
      authId={authId}
      onSendMessage={onSendMessage}
    />
  );
}

const MessagesWithRedirect = withAuthRedirect(MessagesContainer);
export default MessagesWithRedirect;
