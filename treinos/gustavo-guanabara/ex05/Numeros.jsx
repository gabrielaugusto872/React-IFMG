function Numeros(){

    alert("Seja bem-vindo(a) ao meu site!");

    function calcula(){
        let num;
        let dobro, metade;

        num = Number(prompt("Digite um número:"));

        dobro = num * 2;
        metade = num / 2;

        ReactDOM.render(
        <>
        <h1><strong>Trabalhando com números</strong></h1>
        <button onClick = {calcula}>Clique para calcular</button>
        <p>O dobro de {num} é {dobro} e a metade é {metade}!</p>
        </>, document.getElementById("root"));

    };
    
    return(
        <>
        <h1><strong>Trabalhando com números</strong></h1>
        <button onClick = {calcula}>Clique para calcular</button>
        <p>O resultado vem aqui...</p>
        </>
    );
}

ReactDOM.render(<Numeros/>, document.getElementById("root"));