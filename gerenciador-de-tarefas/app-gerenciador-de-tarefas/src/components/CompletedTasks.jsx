import { useSelector } from "react-redux";

function CompletedTasks(){
    const history = useSelector(state => state.tasks.history);

    console.log(history);

    return(
        <div className="historico">
            <h1>Histórico de Tarefas Concluídas</h1>

            {history.length === 0 && <p>Nenhuma tarefa concluída ainda.</p>}

            {history.map((task) => (
                <div key={task.id}>
                    <h3>{task.titulo}</h3>
                    <p>Status: {task.status}</p>
                </div>
            ))}
        </div>
    )
}

export default CompletedTasks