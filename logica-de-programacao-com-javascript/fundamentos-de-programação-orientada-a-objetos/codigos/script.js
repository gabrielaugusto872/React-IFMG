let carro = {
    tipo: "Fiat",
    modelo: "500",
    cor: "Branco"
};

console.log(carro.tipo);
console.log(carro["modelo"]);
console.log(carro.cor);

carro.cor = "Vermelho";

carro.ano = "2022";

console.log(carro);

let lugar = {
    nome: "Point barreiro",
    idade: "14 anos",
    cidade: "Belo Horizonte"
};


console.log(`${lugar.nome} tem ${lugar.idade} e fica em ${lugar.cidade}.`);

// Repetição

console.log(" ")

let objetoABC = {
    A: 10,
    B: 21,
    C: -5
};

for (let chave in objetoABC){
    let valor = objetoABC[chave];
    console.log(`${chave} => ${valor}`);
};

// Métodos
// Exemplo 

console.log(" ");

let cachorro = {
    nome: "Rex",
    cor: "Preto",
    latir: function(){
        return "Au au";
    },
    nomeCor: function(){
        return this.nome + " é " + this.cor;
    }
};

console.log(cachorro.latir());
console.log(cachorro.nomeCor());

// Atividade
console.log(" ");

let contaBancaria = {
    titular: "Gabriel Augusto",
    saldo: 1000,
    depositar: function(valor){
        this.saldo += valor;
    },

    retirar: function(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!")
        } 
    },

    exibirSaldo: function(){
        console.log(this.saldo);
    }
}

contaBancaria.exibirSaldo();
contaBancaria.depositar(500);
contaBancaria.exibirSaldo();
contaBancaria.retirar(200);
contaBancaria.exibirSaldo();
contaBancaria.depositar(1000);
