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

    get patas(){
        return this.#patas;
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

function cadastrar(a){
    animais.push(a);
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



let a1 = new Cachorro("Kleimor", 4);
console.log(a1.nome);
a1.emitirSom();

let a2 = new Gato("Todou", 4);
console.log(a2.nome);
a2.emitirSom();

let a3 = new Passaro("Jorge", 2);
console.log(a3.nome);
a3.emitirSom();

cadastrar(a1);



console.log(animais);
listar();
listarSons();

