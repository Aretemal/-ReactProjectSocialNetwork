import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import FindUsersContainer from './components/FindUsers/FindUsersConnect.jsx';
import HeaderContainer from './components/Header/HeaderConnect.jsx';
import Login from './components/Login/LoginContainer.jsx';
import Registration from './components/Registration/RegistrationContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileConnnect.jsx';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
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
                element={<FindUsersContainer />}
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
  }
}
