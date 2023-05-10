import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/LoginContainer';
import Header from './components/Header/Header';
import Registration from './components/Registration/RegistrationContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import socket from './socket/socket';

const App:React.FC = () => {
  useEffect(() => {
    socket.on('get message', (data) => {
      console.log(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div>
          <Routes>
            <Route
              path="/dialogs"
              element={<DialogsContainer />}
            />
            <Route
              path='/profile'
              element={<ProfileContainer />}
            />
            <Route
              path='/users'
              element={<UsersContainer />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/registration'
              element={<Registration />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
