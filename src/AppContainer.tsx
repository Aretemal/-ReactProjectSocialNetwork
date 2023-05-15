import React from 'react';
import './App.css';
import App from './App';
import { useAppSelector } from './hook/hook';
import socket from './socket/socket';

const AppContainer:React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  if (token) {
    socket.connect();
  } else {
    socket.disconnect();
  }

  return <App socket={socket} />;
};

export default AppContainer;
