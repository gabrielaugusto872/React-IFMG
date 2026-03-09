import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK, ATT_STATUS, REMOVE_TASK, SET_TASKS, SET_HISTORY } from "../store/TaskSlicer";
import { useState } from "react";
import StatusHeader from "./StatusHeader";


function TaskList({ projectId = null }) {
  const [mostrarForm, setMostrarForm] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks)
  const tarefasFiltradas = tasks.filter(
    (task) => task.projectId === projectId
  );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => { const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []; const savedHistory = JSON.parse(localStorage.getItem("history")) || []; dispatch(SET_TASKS(savedTasks)); dispatch(SET_HISTORY(savedHistory)); setLoaded(true); }, [dispatch]);

  const atualizarStatus = (id, status) => {
    dispatch(ATT_STATUS({id, status}))
  };// Action que atualiza o status


  const history = useSelector(state => state.tasks.history);

  useEffect(() => {
  if (!loaded) return;

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("history", JSON.stringify(history));

  const pendentes = tasks.filter(task => task.status === "Pendente").length;
  document.title = `TaskMaster (${pendentes} pendentes)`;
}, [tasks, history, loaded]); // UseEffect que salva no navegador e modifica o nome

  const adicionar = (task) => {
    dispatch(ADD_TASK({
      ...task,
      projectId: projectId
    }))
  } // Action que adiciona uma nova tarefa.

  const deletar = (id) => {
    dispatch(REMOVE_TASK(id))
  } // Action que exclui a tarefa.

  return (
    <div>
        <StatusHeader />
        <button onClick={() => setMostrarForm(!mostrarForm)} className="btn-add-task">➕ Nova tarefa</button>
        {mostrarForm &&(<TaskForm onAdd ={adicionar}/>)}
        {tarefasFiltradas.map((task) => (
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