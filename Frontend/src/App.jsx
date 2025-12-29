import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import {AuthPage} from "./pages/AuthPage.jsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AuthPage />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App