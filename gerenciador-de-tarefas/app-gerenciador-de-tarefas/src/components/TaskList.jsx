import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, titulo: "Estudar React", status: "Pendente" },
    { id: 2, titulo: "Treinar", status: "Pendente" }
  ]);

  const adicionar = (task) => {
    const novaTask = { id: Date.now(), ...task, status: "Pendente" };
    setTasks((prev) => [...prev, novaTask])
  }

  const deletar = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
        <TaskForm onAdd={adicionar} />
        {tasks.map((task) => (
            <TaskItem
                key={task.id}
                titulo={task.titulo}
                status={task.status}
                onDelete={() => deletar(task.id)}
            />
        ))}
    </div>
  );
}

export default TaskList;