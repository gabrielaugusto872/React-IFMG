import { useSelector } from "react-redux";

function StatusHeader(){
    const tasks = useSelector(state => state.tasks.tasks);
    const pendentes = tasks.filter(task => task.status === "Pendente").length;

    return(
        <header style={{ marginBottom: "1rem"}}>
            <h2>Você tem {pendentes} {pendentes === 1 ? "tarefa" : "tarefas"} pendentes</h2>
        </header>
    )
}

export default StatusHeader;