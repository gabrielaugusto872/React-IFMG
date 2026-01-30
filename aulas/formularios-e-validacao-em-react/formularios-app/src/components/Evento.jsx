import { useState } from "react";
import { useForm } from "react-hook-form";

function Evento (){

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);

    function Grava (){
        console.log()
    }

    return (
        <>
            <h3>Formulário de Cadastro</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("nome")} placeholder="Nome"/><br/>
                <input {...register("email")} placeholder="E-mail" /><br/>
                <input {...register("senha")} placeholder="Senha" /><br/>
               
                <button type="submit" >Cadastrar</button>
            </form>
        </>
    )
}

export default Evento;