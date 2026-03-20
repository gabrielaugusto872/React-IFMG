import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card 
      imagem="https://i.pinimg.com/736x/46/ee/e9/46eee9ed1d00ebbac2941a29839dab32.jpg"
      titulo="Nope"
      desc="Após a morte do pai, dois irmãos que administram um rancho na Califórnia começam a presenciar fenômenos misteriosos no céu. Em busca de respostas e da prova perfeita, eles enfrentam uma presença desconhecida que transforma curiosidade em perigo."
    />
  </StrictMode>,
)
