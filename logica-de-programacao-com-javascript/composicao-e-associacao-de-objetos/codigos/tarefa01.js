class Endereco{
    constructor(logradouro,numero,bairro,cidade,estado,cep){
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }

    getInfo(){
        return `${this.logradouro}, ${this.numero}, ${this.bairro}. ${this.cidade}, ${this.estado} - ${this.cep}.`;
    }
}

class Pessoa{
    #nome;#cpf;#endereco;
    constructor(nome, cpf, endereco){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#endereco = new Endereco(endereco.logradouro, endereco.numero, endereco.bairro, endereco.cidade,endereco.estado, endereco.cep);
    }

    getInfo(){
        console.log(`Meu nome é ${this.#nome} e meu endereço é ${this.#endereco.getInfo()}.`);
    }
}

let end = new Endereco("Rua Dos Bobos", "0", "Itaiama", "Carapicuíba", "RN", "00000-000");
let p1 = new Pessoa("José Fros", "131313131-31", end);
p1.getInfo();