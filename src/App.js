import { useContext, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ContentDescription from './components/contentDescription'

import Home from './pages/home'
import Login from './pages/login'
import Watch from './pages/watch'
// import axios from 'axios'
// import { useState } from 'react';
import Register from './pages/register'
import { AuthContext } from './authContext/authContext'
// import { Modal } from './components/modal';
import SuccessPage from './pages/successpage'
import Search from './pages/search'
import Dashboard from './pages/dashboard'
import Community from './pages/community'
import Profile from './pages/profile'
// import Fullpost from './components/fullpost';
import PostModal from './components/postModal'
import Account from './components/account'
// import { Modal } from './components/modal';

function App() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/success' element={<SuccessPage />} />
          <Route path='/movies' element={<Home type='Movies' />} />
          <Route path='/search' element={<Search />} />
          <Route path='/series' element={<Home type='Series' />} />
          <Route path='/timeline' element={<Dashboard />} />
          <Route path='/community/*' element={<Community />} />
          <Route path='/profile/:username/*' element={<Profile />} />
          <Route path='/content/watch/:id' element={<Watch />} />
          <Route path='/content/:id' element={<ContentDescription />} />
          <Route path='/profile/user/*' element={<PostModal />} />
          <Route path='/account/:username' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
