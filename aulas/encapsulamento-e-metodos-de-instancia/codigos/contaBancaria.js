class ContaBancaria {
    #saldo;
    #nome;
    #entradas;
    #saidas
    constructor(saldo, nome){
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
        this.#saldo += valor;
        this.#entradas += `+ R$ ${valor}\n`
    }

    sacar(valor){
        if(valor < this.#saldo){
            this.#saldo -= valor;
            this.#saidas += `- R$ ${valor}\n`
        } else {
            console.log("Saldo insuficiente!")
        }
    }

    get entradas(){
        return this.#entradas;
    }

    get saidas(){
        return this.#saidas;
    }


}

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