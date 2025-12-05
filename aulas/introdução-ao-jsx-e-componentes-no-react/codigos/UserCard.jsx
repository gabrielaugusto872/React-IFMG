function UserCard(){
    let nome;
    let idade;
    let anoNascimento;
    let profissao;

    function envia() {
        nome = document.getElementById("nome").value;
        idade = document.getElementById("idade").value;
        anoNascimento = document.getElementById("nascimento").value;
        profissao = document.getElementById("profissao").value;

        ReactDOM.render(
      <>
        <h1>User Card</h1>
        <strong>Nome:</strong> {nome}
        <p></p>
        <strong>Idade:</strong> {idade}
        <p></p>
        <strong>Ano de Nascimento:</strong> {anoNascimento}
        <p></p>
        <strong>Profissão:</strong> {profissao}
        <p></p>
        <button onClick={() => ReactDOM.render(<UserCard />, document.getElementById("root"))}>Voltar</button>
      </>,
      document.getElementById("root")
    );   
    };

    return (
        <>
        <h1>User Card</h1>
        <input type="text" id="nome" placeholder="Digite o nome..."></input>
        <p></p>
        <input type="text" id="idade" placeholder="Digite a idade..."></input>
        <p></p>
        <input type="text" id="nascimento" placeholder="Digite o ano de nascimento..."></input>
        <p></p>
        <input type="text" id="profissao" placeholder="Digite a profissão..."></input>
        <p></p>
        <button onClick={envia}>Clique aqui para enviar!</button>
        </>
    );
}

ReactDOM.render(<UserCard />, document.getElementById('root'));
