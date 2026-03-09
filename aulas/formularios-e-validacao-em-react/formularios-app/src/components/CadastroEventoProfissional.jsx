import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
    nome: z.string().min(3, "Mínimo 3 caracteres"),
    email: z.email({message: "Email Inválido"}),
    ingresso: z.enum(["VIP", "Comum", "Estudante"], "Selecione um tipo de ingresso válido"),
    termos: z.literal(true, "Você precisa aceitar os termos")
})

function CadastroEventoProfissional(){
    const [enviado, setEnviado] = useState(false);
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const onSubmit = (data) => {
        alert("Dados cadastrados:\n\n" + JSON.stringify(data, null, 2));
        reset();
        setEnviado(true);
    };

    if (enviado){
         return (
            <div>
                <h1>Obrigado! 🎉</h1>
                <p>Seu cadastro foi feito com sucesso.</p>
                <button onClick={() => setEnviado(false)}>Realizar novo cadastro</button>
            </div>
            );
    }
    return(
        <>
            <h1>Cadastre-se no Evento</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("nome")} placeholder="Nome"/> {errors.nome && <p className="erro">{errors.nome.message}</p>} <br />

                <input {...register("email")} placeholder="Email"/> {errors.email && <p className="erro">{errors.email.message}</p>} <br />

                <select {...register("ingresso")}> 
                    <option value="">Selecione o tipo de ingresso</option>
                    <option value="VIP">VIP</option>
                    <option value="Comum">Comum</option>
                    <option value="Estudante">Estudante</option>
                </select>
                {errors.ingresso && <p className="erro">{errors.ingresso.message}</p>} <br />
                <p></p>

                <label >
                    <input type="checkbox" {...register("termos")}/> 
                    Aceito os termos de uso
                </label>
                {errors.termos && <p className="erro">{errors.termos.message}</p>} <br />

                <button type="submit" disabled={!isValid}>Enviar</button>
            </form>
        </>
    )

}

export default CadastroEventoProfissional;