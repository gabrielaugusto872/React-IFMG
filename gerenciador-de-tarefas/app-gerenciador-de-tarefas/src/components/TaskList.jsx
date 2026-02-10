import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const saveTasks = localStorage.getItem("tasks");
    if (saveTasks) {
      try {
        return JSON.parse(saveTasks);
      } catch {
        return [];
      }
    }
    return [];
  }); // Função que lê do navegador as tarefas salvas

  const atualizarStatus = (id, novoStatus) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === id
        ? { ...task, status: novoStatus }
        : task
    )
  );
};

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const pendentes = tasks.filter(task => task.status === "Pendente").length;
    document.title = `TaskMaster (${pendentes} pendentes)`;


  }, [tasks], [tasks.status]); // UseEffect que salva no navegador e modifica o nome

  const adicionar = (task) => {
    const novaTask = { id: Date.now(), ...task, status: "Pendente" };
    setTasks((prev) => [...prev, novaTask])
  } // Função que adiciona uma nova tarefa.

  const deletar = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  } // Função que exclui a tarefa.

  return (
    <div>
        <TaskForm onAdd={adicionar} />
        {tasks.map((task) => (
            <TaskItem
                key={task.id}
                titulo={task.titulo}
                status={task.status}
                onDelete={() => deletar(task.id)}
                onChangeStatus={(novoStatus) =>
                  atualizarStatus(task.id, novoStatus)
                }
            />
        ))}
    </div>
  );
}

export default TaskList;