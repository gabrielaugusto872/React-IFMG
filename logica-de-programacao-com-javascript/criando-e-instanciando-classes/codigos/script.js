class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
};

let p1 = new Pessoa("Ana", 30);
let p2 = new Pessoa("Bia", 40);

p1.apresentar();
p2.apresentar();