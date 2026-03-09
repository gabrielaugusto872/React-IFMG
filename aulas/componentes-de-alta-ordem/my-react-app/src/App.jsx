import './App.css'
import Greeting from './W3/Greeting'
import WithBorder from './W3/WithBorder'
import WithLogger from './exercicios/WithLogger';
import Timer from './exercicios/Timer';
import { useState } from 'react';

function App() {
  const [opcao, setOpcao] = useState("h1");

  return (
    <div>
      <h2>Escolha como mostrar o tempo</h2>

      <button onClick={() => setOpcao("h1")}>Mostrar em H1</button>
      <button onClick={() => setOpcao("input")}>Mostrar em Input</button>
      <button onClick={() => setOpcao("alert")}>Alerta aos 10s</button>

      <Timer
        render={(seconds) => {
          if (opcao === "h1") {
            return <h1>{seconds} segundos</h1>;
          }

          if (opcao === "input") {
            return <input value={seconds} readOnly />;
          }

          if (opcao === "alert") {
            if (seconds === 10) {
              alert("Chegou em 10 segundos!");
            }
            return <p>{seconds} segundos</p>;
          }
        }}
      />
    </div>
  );
}

export default App;