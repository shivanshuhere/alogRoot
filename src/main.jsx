import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvier from './context/user.context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvier >
      <App />
    </UserContextProvier>
  </StrictMode>,
)
