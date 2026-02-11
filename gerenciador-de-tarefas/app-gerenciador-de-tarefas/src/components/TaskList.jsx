import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK, ATT_STATUS, REMOVE_TASK, SET_TASKS } from "../store/TaskSlicer";
import { useState } from "react";
import StatusHeader from "./StatusHeader";


function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks)

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch(SET_TASKS(saved));
    setLoaded(true);
  }, [dispatch]);// Função que lê do navegador as tarefas salvas


  const atualizarStatus = (id, status) => {
    dispatch(ATT_STATUS({id, status}))
  };// Action que atualiza o status

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const pendentes = tasks.filter(task => task.status === "Pendente").length;
    document.title = `TaskMaster (${pendentes} pendentes)`;
  }, [tasks]); // UseEffect que salva no navegador e modifica o nome

  const adicionar = (task) => {
    dispatch(ADD_TASK(task))
  } // Action que adiciona uma nova tarefa.

  const deletar = (id) => {
    dispatch(REMOVE_TASK(id))
  } // Action que exclui a tarefa.

  return (
    <div>
        <StatusHeader />
        <TaskForm onAdd={adicionar} />
        {tasks.map((task) => (
            <TaskItem
                key={task.id}
                id={task.id}
                titulo={task.titulo}
                status={task.status}
                onDelete={deletar}
                onChangeStatus={atualizarStatus}
            />
        ))}
    </div>
  );
}

export default TaskList;