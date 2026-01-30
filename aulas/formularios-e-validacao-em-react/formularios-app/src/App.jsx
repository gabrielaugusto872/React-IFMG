import { useState } from 'react'
import Evento from './components/Evento'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Evento/>
    </>
  )
}

export default App
