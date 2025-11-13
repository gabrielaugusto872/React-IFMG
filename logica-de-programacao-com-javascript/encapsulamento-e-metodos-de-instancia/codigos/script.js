class Pessoa{
    #nome;
    #endereco;
    constructor(nome, endereco){
        this.#nome = nome;
        this.#endereco = endereco;
    }

    get nome(){
        return this.#nome;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(valor){
        this.#endereco = valor;
    }

   getInfo(){
        console.log(`O nome dessa pessoa é ${this.#nome} e ela mora em ${this.#endereco}.`)
    }

};

let p = new Pessoa("Gabriel", "Belo Horizonte");
console.log(p.nome);
console.log(p.endereco);
p.endereco = "Sabará"
console.log(p.endereco);
p.getInfo();