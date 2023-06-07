import React from 'react';
import './App.css';
import App from './App';
import socket from './socket/socket';

const AppContainer:React.FC = () => <App socket={socket} />;

export default AppContainer;
