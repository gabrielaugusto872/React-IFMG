import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.email({ message: "Email Invalido"}),
    senha: z.string().regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: "Senha deve ter 8 caracteres, maiúscula, minúscula, número e símbolo" }
  )
})

function Login(){
    const { register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return(
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder="Email" />{errors.email && <p>{errors.email.message}</p>}
                <br />
                <input {...register("senha")} placeholder="senha" /> {errors.senha && <p>{errors.senha.message}</p>}
                <br />

                <button type="submit">Entrar</button>
            </form>
        </>
    )
    
}

export default Login;