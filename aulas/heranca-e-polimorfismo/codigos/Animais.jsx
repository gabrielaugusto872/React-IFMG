let animais = [];

function Animais(){
    

    class Animal{
        #nome;

        constructor(nome){
            this.#nome = nome;
        }

        emitirSom(){
            return "Som genérico";
        }

        get nome(){
            return this.#nome;
        }
    
    }

    class Cachorro extends Animal{
        constructor(nome){
            super(nome);
        }

        emitirSom(){
            return "Au Au...";
        }
    }

    class Gato extends Animal{
        constructor(nome){
            super(nome);
        }

        emitirSom(){
            return "Miau...";
        }
    }

    class Passaro extends Animal{
        constructor(nome){
            super(nome);
        }

        emitirSom(){
            return "Fiu Fiu Fiu...";
        }
    }

    function cadastrar(a){
        animais.push(a);
        console.log(`${a.nome} cadastrado`)
    }

    function listar(){
        ReactDOM.render(<>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "2px solid black",
                borderRadius: "10px",
                padding: "20px",
                width: "300px",
                textAlign: "center",
                margin: "20px auto",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}>
                <h1>Animais Cadastrados</h1>
                <ul>
                    {
                        animais.map((animal, indice) =>(
                            <li key={indice}>{animal.nome}({animal.constructor.name})</li>
                        ))
                    }
                </ul>
                <button id="volta" onClick={() => ReactDOM.render(<Animais/>, document.getElementById("root"))}>Voltar</button>
            </div>
            </>, document.getElementById("root"));
    }

    function listarSons(){
        ReactDOM.render(<>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "2px solid black",
                borderRadius: "10px",
                padding: "20px",
                width: "300px",
                textAlign: "center",
                margin: "20px auto",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}>
                <h1>Lista de Sons</h1>
                <ul>
                    {
                        animais.map((animal, indice) =>(
                            <li key={indice}>{animal.emitirSom()}({animal.nome})</li>
                        ))
                    }
                </ul>
                <button id="volta" onClick={() => ReactDOM.render(<Animais/>, document.getElementById("root"))}>Voltar</button>
            </div>
            </>, document.getElementById("root"));
    }

    function menuCadastro(){
        ReactDOM.render(<>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "2px solid black",
                borderRadius: "10px",
                padding: "20px",
                width: "300px",
                textAlign: "center",
                margin: "20px auto",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}>
                <h1>Cadastro</h1>
                <button id="cadastra" onClick={() => cadastro("cachorro")}>Cachorro</button>
                <button id="cadastra" onClick={() => cadastro("gato")}>Gato</button>
                <button id="cadastra" onClick={() => cadastro("passaro")}>Passaro</button>
                <button id="cadastra" onClick={() => cadastro("Outro Animal")}>Outro Animal</button>
                <button id="volta" onClick={() => ReactDOM.render(<Animais/>, document.getElementById("root"))}>Voltar</button>
            </div>
            </>, document.getElementById("root"));
    }


    function cadastro(tipo){
        if(tipo === "Outro Animal"){
            tipo = prompt(`Qual é o seu animal?`);
        }

        let nome = prompt(`Qual o nome do seu ${tipo}?`)
        
        if(tipo.toLowerCase() === "cachorro"){
            let a = new Cachorro(nome);
            cadastrar(a);
        } else if(tipo.toLowerCase() === "gato"){
            let a = new Gato(nome);
            cadastrar(a);
        } else if(tipo.toLowerCase() === "passaro"){
            let a = new Passaro(nome);
            cadastrar(a);
        } else {
            let a = new Animal(nome);
            cadastrar(a);
        }
        

        
    }

    function cadastrar(a){
        animais.push(a);
        alert(`${a.nome} cadastrado`);
    }

    return(
        <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "2px solid black",
            borderRadius: "10px",
            padding: "20px",
            width: "300px",
            textAlign: "center",
            margin: "20px auto",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}>
            <h1>Menu</h1>
            <button id="cadastra" onClick={menuCadastro}>Cadastrar animais</button>
            <button id="lista" onClick={listar}>Listar Animais</button>
            <button id="emitirSons" onClick={listarSons}>Emitir todos os sons</button>
        </div>
        </>
    )

} ReactDOM.render(<Animais/>, document.getElementById("root"));   