import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import FindUsersContainer from './components/FindUsers/FindUsersContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
