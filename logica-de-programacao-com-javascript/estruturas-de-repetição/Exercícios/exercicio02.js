const opcoes = ["pedra", "papel", "tesoura"];

let vitorias = 0
let derrotas = 0
let empates = 0
let opcao
let escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

do {
    console.log("0- Sair")
    opcao = prompt("Escolha:")

    if(opcao === escolhaComputador){
        console.log(`Computador escolheu: ${escolhaComputador}`);

        console.log("Empate")
        empates += 1;
    } else if((opcao === "pedra" && escolhaComputador === "tesoura") || (opcao === "papel" && escolhaComputador === "pedra") || (opcao === "tesoura" && escolhaComputador === "papel")){
        console.log(`Computador escolheu: ${escolhaComputador}`);

        console.log("Vitória")
        vitorias += 1;
    } else if((opcao === "papel" && escolhaComputador === "tesoura") || (opcao === "tesoura" && escolhaComputador0 === "pedra") || (opcao === "pedra" && escolhaComputador === "papel")){
        console.log(`Computador escolheu: ${escolhaComputador}`);

        console.log("Derrota")
        derrotas += 1;
    }

    console.log(" ")
    console.log("Contagem de Partidas:")
    console.log(`Vitórias: ${vitorias}`)
    console.log(`Empates: ${empates}`)
    console.log(`Derrotas: ${derrotas}`)
    console.log(" ")

} while (opcao !=0)
