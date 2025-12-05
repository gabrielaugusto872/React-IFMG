let numero;
let conta = 0;

numero = Number(prompt("Digite o número a ser validado:"));

for(let i=2;i<numero;i++){
    if (numero % i === 0){
        conta ++;
    }
}
console.log(`${conta}`)
if(conta > 0){
    console.log(`O número ${numero} não é primo`)
} else {
    console.log(`O número ${numero} é primo`)
}
