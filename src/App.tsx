import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/LoginContainer';
import Header from './components/Header/Header';
import Registration from './components/Registration/RegistrationContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import { useAppSelector } from './hook/hook';

interface AppProps {
  socket: Socket,
}
const App:React.FC<AppProps> = ({ socket }) => {
  const { i18n } = useTranslation();
  const { lang } = useAppSelector((state) => state.settings);
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div>
          <Routes>
            <Route
              path="/dialogs"
              element={<DialogsContainer socket={socket} />}
            />
            <Route
              path="/settings"
              element={<SettingsContainer />}
            />
            <Route
              path="/profile/:login"
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
              path=''
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
