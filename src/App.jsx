import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import Login from './components/Login/LoginContainer.jsx';
import Header from './components/Header/Header.jsx';
import Registration from './components/Registration/RegistrationContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';

function App() {
  console.log(12321);
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
}
export default App;
