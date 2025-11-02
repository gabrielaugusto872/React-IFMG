function Ola(){
    
    function inicio(){
        let nome;

        nome = prompt("Qual é o seu nome?");
        ReactDOM.render(
        <>
        <h1><strong>Trabalhando com Dados v2.0</strong></h1>
        <button onClick = {inicio}>Clique para começar</button>
        <p>Olá, <strong>{nome}!</strong> É um grande prazer te conhecer!</p> 
        </>
        , document.getElementById("root"));
    }

    return (
        <>
        <h1><strong>Trabalhando com Dados v2.0</strong></h1>
        <button onClick = {inicio}>Clique para começar</button>
        <p>Aqui vai aparecer o resultado.</p>
        </>
    );
};

ReactDOM.render(<Ola/>, document.getElementById("root"));