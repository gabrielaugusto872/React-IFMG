import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TaskList from "../components/TaskList";

function TaskProject(){
    const { id } = useParams();
    const tasks = useSelector(state => state.tasks.tasks);


    const tarefasDoProjeto = tasks.filter(
        (t) => t.projectId === Number(id)
    );

    return(
        <>
            <h1>Tarefas do Projeto {id}</h1>

            <TaskList tasks={tarefasDoProjeto} projectId={id} />
        </>
    )
    }

export default TaskProject;