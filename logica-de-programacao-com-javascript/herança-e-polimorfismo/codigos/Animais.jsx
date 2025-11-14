function Animais(){
    let animais = [];

    class Animal{
        #nome; #patas;

        constructor(nome, patas){
            this.#nome = nome;
            this.#patas = patas;
        }

        emitirSom(){
            console.log("Som genérico");
        }

        get nome(){
            return this.#nome;
        }
    }

    class Cachorro extends Animal{
        constructor(nome, patas){
            super(nome, patas);
        }

        emitirSom(){
            console.log("Au Au...")
        }
    }

    class Gato extends Animal{
        constructor(nome, patas){
            super(nome, patas);
        }

        emitirSom(){
            console.log("Miau...")
        }
    }

    class Passaro extends Animal{
        constructor(nome, patas){
            super(nome, patas);
        }

        emitirSom(){
            console.log("Fiu Fiu Fiu...")
        }
    }



    let a1 = new Cachorro("Kleimor", 4);
    console.log(a1.nome);
    a1.emitirSom();

    let a2 = new Gato("Todou", 4);
    console.log(a2.nome);
    a2.emitirSom();

    let a3 = new Passaro("Jorge", 2);
    console.log(a3.nome);
    a3.emitirSom();









    function cadastrar(){// Cadastrando via código ainda
        animais = {
            nome
        }
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
                <p>(Animais pré-definidos dentro do código)</p>
                <button id="cadastra" onClick={cachorro}>Cachorro</button>
                <button id="cadastra" onClick={gato}>Gato</button>
                <button id="cadastra" onClick={passaro}>Passaro</button>
                <button id="cadastra" onClick={outroAnimal}>Outro Animal</button>
                <button id="volta" onClick={() => ReactDOM.render(<Animais/>, document.getElementById("root"))}>Voltar</button>
            </div>
            </>, document.getElementById("root"));
    }

    function cachorro(){
        let a1 = new Cachorro("Valdez", 4);
        alert(`Parabéns! O cachorro ${a1.nome} foi cadastrado`)
    }

    function gato(){
        let a2 = new Gato("Valdez", 4);
        alert(`Parabéns! O gato ${a2.nome} foi cadastrado`)
    }

    function passaro(){
        let a1 = new Cachorro("Valdez", 4);
        alert(`Parabéns! O cachorro ${a1.nome} foi cadastrado`)
    }

    function outroAnimal(){
        let a1 = new Cachorro("Valdez", 4);
        alert(`Parabéns! O cachorro ${a1.nome} foi cadastrado`)
    }

    function listar(){

    }

    function emitirSom(){

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
            <button id="cadastra" onClick={cadastrar}>Cadastrar animais</button>
            <button id="lista" onClick={listar}>Listar Animais</button>
            <button id="emitirSons" onClick={emitirSom}>Emitir todos os sons</button>
        </div>
        </>
    )

} ReactDOM.render(<Animais/>, document.getElementById("root"));   