import React, { useContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'

function App() {
  const isUserAuthenticated = useSele
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={isUserAuthenticated ? <Dashboard /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
