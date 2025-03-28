import React, { useContext, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Error from './pages/Error.jsx'
import Register from './pages/Register.jsx'
import { userContext } from './context/user.context.jsx'
function App() {
  const { setUser } = useContext(userContext)
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])
  const { user } = useContext(userContext)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={user?.authenticated ? <Dashboard /> : <Login />} />
          <Route path='/register' element={user?.authenticated ? <Dashboard /> : <Register />} />
          <Route path='*' element={user?.authenticated ? <Error /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
