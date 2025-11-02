function Nome(){

    function inicia(){
        let name;

        name = prompt("Qual é o seu nome?");
        alert(`Olá, ${name}! É um prazer te conhecer!`)
    }

    return(
        <>
        <h1><strong>Trabalhando com dados v1.0</strong></h1>
        <button onClick = {inicia}>Clique para começar</button>
        </>
        
    )
}

ReactDOM.render(<Nome/>, document.getElementById("root"));