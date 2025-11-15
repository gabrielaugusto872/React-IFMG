let animais = [];

class Animal{
    #nome;

    constructor(nome){
        this.#nome = nome;
    }

    emitirSom(){
        console.log("Som genérico");
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
        console.log("Au Au...")
    }
}

class Gato extends Animal{
    constructor(nome){
        super(nome);
    }

    emitirSom(){
        console.log("Miau...")
    }
}

class Passaro extends Animal{
    constructor(nome){
        super(nome);
    }

    emitirSom(){
        console.log("Fiu Fiu Fiu...")
    }
}

function cadastrar(a){
    animais.push(a);
    console.log(`${a.nome} cadastrado`)
}

function listar(){
    for(let i=0;i<animais.length;i++){
        console.log(`Nome: ${animais[i].nome}`);
    }
}

function listarSons(){
    for(let i=0;i<animais.length;i++){
        animais[i].emitirSom();
    }
}

function menuCadastro(){
    let tipo = prompt("Qual o tipo do seu animal?");
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
    }
}

function menu(opcao){
    switch(opcao){
        case 1:
            menuCadastro();
            break;
        case 2:
            listar();
            break;
        case 3:
            listarSons();
        default:
            break;
    }
}

let entrada = -1;

while (entrada !== 0){
    entrada = Number(prompt("Digite a opção desejada: "));

    if (entrada === 0){
        break;
    }

    menu(entrada);
}