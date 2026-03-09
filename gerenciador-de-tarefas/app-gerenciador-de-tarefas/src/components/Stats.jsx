import { useSelector } from "react-redux";
import withPremiumAccess from "./WithPremiumAcces";

function Stats() {
  const history = useSelector(state => state.tasks.history);

  console.log("HISTORY:", history);

  const now = new Date();

    const tarefasSemana = history.filter(task => {

    if (!task.completedAt) return false;

    const dataTarefa = new Date(task.completedAt);
    const now = new Date();

    const diff = (now - dataTarefa) / (1000 * 60 * 60 * 24);

    return diff <= 7;

    });

  return (
    <div>
      <h1>Estatísticas</h1>

      <p>Tarefas concluídas na semana: {tarefasSemana.length}</p>
    </div>
  );
}

export default withPremiumAccess(Stats);