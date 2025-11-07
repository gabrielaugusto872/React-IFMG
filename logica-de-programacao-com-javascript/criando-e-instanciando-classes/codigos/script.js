class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log("Olá, meu nome é " + this.nome);
    }
};

let novaPessoa = new Pessoa("Gabriel", 22);
novaPessoa.apresentar();