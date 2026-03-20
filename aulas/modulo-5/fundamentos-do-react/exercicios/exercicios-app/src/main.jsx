import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MeuPrimeiroComponente from './components/MeuPrimeiroComponente.jsx'
import PerfilUsuario from './components/PerfilUsuario.jsx'
import Contador from './components/Contador.jsx'
import InformacoesPessoais from './components/InformacoesPessoais.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeuPrimeiroComponente />
    <PerfilUsuario />
    <Contador />
    <InformacoesPessoais />
  </StrictMode>,
)
