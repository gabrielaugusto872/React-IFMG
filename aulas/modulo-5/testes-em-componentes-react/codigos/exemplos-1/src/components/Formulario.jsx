import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';

const schema = z.object({
        nome: z.string().min(3, "Mínimo 3 caracteres")
    })

function Formulario(){
    const [enviado, setEnviado] = useState(false);
    const [username, setUsername] = useState("")
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data) => {
        setUsername(data.nome);
        console.log(data);
        reset();
        setEnviado(true);
    }

    if (enviado){
         return (
            <div>
                <h1>Obrigado, {username}! 🎉</h1>
                <p>Seu cadastro foi feito com sucesso.</p>
                <button onClick={() => setEnviado(false)}>Realizar novo cadastro</button>
            </div>
            );
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("nome")} placeholder='Nome'/> {errors.nome && <p>{errors.nome.message}</p>}

                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}

export default Formulario;