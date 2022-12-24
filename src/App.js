import './App.css'
import React from 'react'
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App (props) {
  return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs"
                               element={<DialogsContainer />}
                        />
                        <Route path='/profile'
                               element={<Profile />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
  )
}

export default App
