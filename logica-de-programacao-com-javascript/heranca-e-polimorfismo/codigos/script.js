class Pessoa {
    #nome; #cpf

    constructor(nome, cpf){
        this.#nome = nome;
        this.#cpf = cpf;
    }

    get nome() {
        return this.#nome;
    }

    apresentar(){
        console.log(`Meu nome é ${this.#nome}`);
    }
}

class Aluno extends Pessoa {
    #matricula; #curso;

    constructor(nome, cpf, matricula, curso){
        super(nome, cpf);
        this.#matricula = matricula;
        this.#curso = curso;
    }
    get curso(){
        return this.#curso;
    }
    apresentar(){ // Sobrescreve a função feita no "pai"
        super.apresentar(); // Copia a função do "pai"
        console.log(`Sou ${this.nome}, do curso ${this.#curso}.`);
    }
}

let p1 = new Pessoa("Gabriel", "15053557616");
p1.apresentar();

let a1 = new Aluno("julio", "13940028398", "202381088", "React");
a1.apresentar();