import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    titulo: z.string().min(3, "O título deve ter no mínimo 3 caracteres"),
    descricao: z.string()
    .min(5, "A descrição precisa ter pelo menos 5 caracteres")
    .max(200, "Máximo de 200 caracteres"),
    categoria: z.enum(["Trabalho", "Pessoal", "Estudo"], "Selecione uma categoria válida"),
})

function TaskForm({ onAdd }){
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const onSubmit = (data) => {
        onAdd(data);
        reset();
    }

    return(
        <div className="formu">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("titulo")} placeholder="Título da tarefa" className="newTask" />{errors.titulo && <p className="erro">{errors.titulo.message}</p>} 

                <textarea {...register("descricao")} placeholder="Descrição da tarefa" className="newTask" />{errors.descricao && <p className="erro">{errors.descricao.message}</p>} 
                <br />
                
                <select {...register("categoria")}> 
                    <option value="">Selecione a categoria da tarefa</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudo">Estudo</option>
                </select>
                {errors.categoria&& <p className="erro">{errors.categoria.message}</p>} 
                

                <button type="submit" className="btn-add-task" disabled={!isValid}>Enviar</button>
            </form>
        </div>
    )
}

export default TaskForm;