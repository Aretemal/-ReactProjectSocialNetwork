import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import FindUsersContainer from './components/FindUsers/FindUsersConnect.jsx';
import HeaderContainer from './components/Header/HeaderConnect.jsx';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileConnnect.jsx';

function App() {
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
              path='/profile/:userId'
              // ?
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
