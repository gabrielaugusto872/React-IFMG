function InformacoesPessoais (){
    const nomeCompleto = "Gabriel Augusto dos Santos";
    const idade = 24;
    const profissao = "Desenvolvedor Front-End";
    const estaAtivo = false;

    return (
        <>
            <h2>{nomeCompleto}</h2>
            <p>Idade: {idade}</p>
            <p>{estaAtivo == true ? `Profissão: ${profissao}` : ""}</p>
        </>
    )
}

export default InformacoesPessoais;