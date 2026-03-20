import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TaskList from "../components/TaskList";

function TaskProject() {
  const { id } = useParams();
  const projectId = Number(id);

  const tasks = useSelector((state) => state.tasks.tasks);

  const projetos = [
    { id: 1, titulo: "Gerenciador de Tarefas" },
    { id: 2, titulo: "Calculadora" },
    { id: 3, titulo: "Sala de Espera" }
  ];

  const projeto = projetos.find(p => p.id === projectId);

  const tarefasDoProjeto = tasks.filter(
    (t) => t.projectId === projectId
  );

  return (
    <div>
      <h1>{projeto?.titulo || "Projeto"}</h1>

      <TaskList tasks={tarefasDoProjeto} projectId={projectId} />
    </div>
  );
}

export default TaskProject;