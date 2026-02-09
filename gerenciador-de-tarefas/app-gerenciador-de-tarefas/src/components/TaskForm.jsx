import { useForm } from "react-hook-form";

function TaskForm({ onAdd }){
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        onAdd(data);
        reset();
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("titulo")} placeholder="Título da tarefa" className="newTask" required />
                <button type="submit" style={{ display: "none" }}>Enviar</button>
            </form>
        </>
    )
}

export default TaskForm;