function Botao(){

    function alerta(){
        alert("Botão clicado!")
    }

    return (
        <>
        <h1><strong>Interagindo com um botão</strong></h1>
        <button onClick = {alerta}>Clica em mim!</button>
        </>
    );
};

ReactDOM.render(<Botao />, document.getElementById('root'));