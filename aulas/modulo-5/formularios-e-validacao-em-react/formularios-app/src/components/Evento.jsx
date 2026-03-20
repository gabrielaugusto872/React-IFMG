import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const eventoSchema = z.object({
    nome: z.string().min(3, "Minímo 3 caracteres"),
    email: z.email({ message: "Email Invalido"}),
    senha: z.string().min(8, "Mínimo 8 caracteres"),
})

function Evento (){
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(eventoSchema)
    });
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <h3>Formulário de Cadastro</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("nome")} placeholder="Nome"/>{errors.nome && <p>{errors.nome.message}</p>}<br/>
                <input {...register("email")} placeholder="E-mail" />{errors.email && <p>{errors.email.message}</p>}<br/>
                <input {...register("senha")} placeholder="Senha" />{errors.senha && <p>{errors.senha.message}</p>}<br/>
               
                <button type="submit" >Cadastrar</button>
            </form>
        </>
    )
}

export default Evento;