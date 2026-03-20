import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Usercard from './components/Usercard.jsx'
import Lampada from './components/lampada.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercard />
    <Lampada />
  </StrictMode>,
)
