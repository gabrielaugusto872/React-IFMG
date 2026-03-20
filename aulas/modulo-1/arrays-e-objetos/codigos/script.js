let numeros = new Array(5);
let soma = 0;
let i = 0;

numeros[i] = prompt("Digite um número:");

while(numeros[i] !== "parar"){
    numeros[i] !== Number(numeros[i]);
    soma += numeros[i];
    i += 1;
    numeros[i] = prompt("Digite um número:");
}

console.log(`${soma}`)