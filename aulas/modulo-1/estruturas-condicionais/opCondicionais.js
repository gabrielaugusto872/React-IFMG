// If Else
let numero = 13;

if (numero > 0){
    console.log('O número é positivo');
}

let idade = 22;

if(idade < 13){
    console.log("Criança");
} else if(idade < 18){
    console.log("Jovem");
} else if (idade < 60){
    console.log("Adulto");
} else {
    console.log("Idoso");
}

//If Aninhado
let estaLogado = true;
let ehAdmin = false;

if(estaLogado){
    if(ehAdmin){
        console.log("Acesso de Administradir concedido");
    } else {
        console.log("Acesso de usúario concedido");
    }
} else {
    console.log("Você precisa estar logado.");
}

// Operador Ternário
let nome = "Gabriel"

console.log(nome === "Gabriel"?'Seu nome é Gabriel':'Digite o nome Gabriel');

// Switch
let opcao1 = 3;

switch(opcao1){
    case 1:
        console.log("Você escolheu a opção 1");
        break;
    case 2:
        console.log("Você escolheu a opção 2");
        break;
    case 3:
        console.log("Você escolheu a opção 3");
        break;
    case 4:
        console.log("Você escolheu a opção 4");
        break;
}