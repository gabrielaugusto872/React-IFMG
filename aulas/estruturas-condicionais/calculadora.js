console.log("MINICALCULADORA")
console.log("Operações Disponíveis:")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")

let opcao;
let numero1;
let numero2;
let resultado;
let sinal;

numero1 = Number(prompt("Digite o primeiro número da operação: "))
numero2 = Number(prompt("Digite o segundo número da operação: "))
opcao = Number(prompt("Digite a opção de acordo com a operação desejada: "))

if (opcao === 1){
    resultado = numero1 + numero2
    sinal = '+'
} else if (opcao === 2){
    resultado = numero1 - numero2
    sinal = '-'
} else if (opcao === 3){
    resultado = numero1 * numero2
    sinal = 'X'
} else if (opcao === 4){
    resultado = numero1 / numero2
    sinal = '/'
} else {
    console.log("Operação Indisponível!")
}

if (opcao === 4 && numero2 === 0){
    console.log("Não é possível realizar divisão por 0!")
} else if (opcao > 0 && opcao < 5){
    console.log(`${numero1} ${sinal} ${numero2} = ${resultado}`)
}