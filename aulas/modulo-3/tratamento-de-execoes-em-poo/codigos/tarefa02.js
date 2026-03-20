class ContaBancaria{
    #saldo;#nome;#entradas;#saidas;
    constructor(saldo, nome, entradas, saidas) {
        this.#saldo = saldo;
        this.#nome = nome;
        this.#entradas = "ENTRADAS\n";
        this.#saidas = "SAÍDAS\n";
    }

    #formatarSaldo(){
        return `R$ ${this.#saldo}`
    }

    get saldo(){
        return this.#formatarSaldo;
    }

    depositar(valor){
        if(valor < 0){
            throw new ValorNegativoError();
        }
        if(isNaN(valor)){
            throw new NaoNumeroError();
        }
        this.#saldo += valor;
        this.#entradas += `+ R$ ${valor}\n`
    }

    sacar(valor){
        if(valor < 0){
            throw new ValorNegativoError();
        }
        if(valor > this.#saldo){
            throw new SaldoInsuficienteError();
        }
        if(isNaN(valor)){
            throw new NaoNumeroError();
        }
        this.#saldo -= valor;
        this.#saidas += `- R$ ${valor}\n`
    }

    get entradas(){
        return this.#entradas;
    }

    get saidas(){
        return this.#saidas;
    }

}

class ValorNegativoError extends Error{
    constructor() {
        super("O valor deve ser positivo!");
        this.name = "ValorNegativoError";
    }
}

class SaldoInsuficienteError extends Error{
    constructor() {
        super("Saldo insuficiente!");
        this.name = "SaldoInsuficienteError";
    }
}

class NaoNumeroError extends Error{
    constructor(){
        super("Valor inválido!");
        this.name = "NaoNumeroError";
    }
}

try{
    let c1 = new ContaBancaria(500, "Gabriel");
    console.log(c1.saldo());
    c1.depositar(200);
    console.log(c1.saldo());
    c1.sacar(800);
    console.log(c1.saldo());
    c1.sacar(300);
    c1.depositar(100);
    c1.depositar(20);
    c1.sacar(30);
    c1.sacar(100);
    c1.sacar(300);
    console.log(c1.saldo());
    console.log(c1.entradas);
    console.log(c1.saidas);
} catch(erro){
    console.log(`ERRO: ${erro.message}`);
}