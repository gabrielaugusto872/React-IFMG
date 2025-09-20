let a1 = "Shampoo"
let a2 = "Condicionador"
let b1 = "caro"
let b2 = "barato"

let produto1 = a1 + " " + b1
let produto2 = a2 + " " + b2

let produtos = `${produto1} ${produto2}`

let tamanho1 = produto1.length
let tamanho2 = produto2.length

let caracteristica1 = produto1.slice(8, tamanho1)
let caracteristica2 = produto2.slice(14, tamanho2)

let maiscula = produto1.toUpperCase()
let minuscula = produto2.toLowerCase()

console.log(produto1)
console.log(produto2)
console.log(produtos)
console.log(tamanho1)
console.log(tamanho2)
console.log(caracteristica1)
console.log(caracteristica2)
console.log(maiscula)
console.log(minuscula)
