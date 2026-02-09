import { use, useState } from "react";
import Task from "./TaskItem"
import '../styles/App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa(){
    i
  }

  return (
    <div className="container">
      <h1 className="title">Gerenciador de Tarefas</h1>

      {tasks.map((task) => (
        <Task
          key={task.id}
          titulo={task.titulo}
          status={task.status}
        />
      ))}
    </div>
  );
}

export default App
