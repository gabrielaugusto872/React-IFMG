
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
contaBancaria.retirar(2000);
