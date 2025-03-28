import React, { useContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import { userContext } from './context/user.context.jsx'
function App() {
  const { authenticated } = useContext(userContext)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={authenticated ? <Dashboard /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
