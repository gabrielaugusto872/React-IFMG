let nota1
let nota2
let nota3
let media

nota1 = Number(prompt("Digite a primeira nota do aluno: "))
nota2 = Number(prompt("Digite a segunnda nota do aluno: "))
nota3 = Number(prompt("Digite a terceira nota do aluno: "))

media = (nota1 + nota2 + nota3) / 3

if (media >= 7){
    console.log(`Aluno aprovado com a media de ${media} pontos`)
} else if (media >= 5){
    console.log(`Aluno em recuperação com a media de ${media} pontos`)
} else {
    console.log(`Aluno reprovado com a media de ${media} pontos`)
}