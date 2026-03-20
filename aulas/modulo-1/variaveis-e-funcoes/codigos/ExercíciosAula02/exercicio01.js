// Poupança

let deposiotInicial = 500
let mes2
let mes3
let mes4
let juros = 0.01

mes2 = (deposiotInicial + (deposiotInicial * juros)) + 200
mes3 = (mes2 + (mes2 * juros)) - 50
mes4 = mes3 + (mes3 * juros)

console.log(`Saldo do 2° mês: ${mes2}`)
console.log(`Saldo do 3° mês: ${mes3}`)
console.log(`Saldo do 4° mês: ${mes4}`)
