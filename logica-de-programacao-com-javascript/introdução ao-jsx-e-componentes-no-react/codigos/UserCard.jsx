function UserCard(){
    let nome;
    let idade;
    let anoNascimento;
    let profissão;
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
        
        <h1>User Card</h1>
        <p>Nome:</p>
        <p>Idade: </p>     
        <p>Ano de Nascimento: </p>       
        <p>Profissâo: </p>
        </>
    );
}

ReactDOM.render(<UserCard />, document.getElementById('root'));
