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
}


console.log(`${lugar.nome} tem ${lugar.idade} e fica em ${lugar.cidade}.`)