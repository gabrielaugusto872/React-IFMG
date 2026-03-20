function Tarefas(){

    let tfs = [];

    function adiciona(){
        let nome = document.getElementById("novaTarefa").value;
        if (nome.trim() === "") return;
        let tf = {
            nome: nome,
            concluida: false
        };
        
        tfs.push(tf);
        document.getElementById("novaTarefa").value = "";
        listar();
    }

    function listar(){
      ReactDOM.render(
      <>
        <h1><strong>Lista de Tarefas</strong></h1>
        <div>
            <input type="text" id="novaTarefa" placeholder="Nova Tarefa..." onKeyDown={(event) => {if (event.key === "Enter") adiciona();}}/>
            <button id="adicionarTarefa" onClick={adiciona}>Adicionar</button>
        </div>
        <ul>
            {tfs.map((tf, indice) => (
                <li key={indice}>
                    <strong>{tf.concluida ? <s>{tf.nome}</s> : tf.nome}</strong>
                    <button id="concluirTarefa" onClick={(event) => concluir(indice)}>✅</button>
                    <button id="removerTarefa" onClick={(event) => deletar(indice)}>🗑️</button>
                </li>
            ))}
        </ul>
      </>,
      document.getElementById("root")
    );   
    }

    function concluir(indice){
        tfs[indice].concluida = true;
        listar();
    }

    function deletar(indice){
        tfs.splice(indice, 1);
        listar();
    }

    return (
        <>
        <h1><strong>Lista de Tarefas</strong></h1>
        <div>
            <input type="text" id="novaTarefa" placeholder="Nova Tarefa..." onKeyDown={(event) => {if (event.key === "Enter") adiciona();}} />
            <button id="adicionarTarefa" onClick={adiciona}>Adicionar</button>
            <ul>
                {tfs.map((tf, indice) => (
                    <li key={indice}>{tf}</li>
                ))}
            </ul>
        </div>
        </>
    );
}

ReactDOM.render(<Tarefas/>, document.getElementById("root"));