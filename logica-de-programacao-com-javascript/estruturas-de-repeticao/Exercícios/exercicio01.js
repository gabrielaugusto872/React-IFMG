let notas;
let media;
let quantidadeAlunos;
let soma = 0;

quantidadeAlunos = Number(prompt("Digite a quantidade de alunos na turma:"))

for(let i=0;i<quantidadeAlunos;i++){
    notas = Number(prompt(`Digite a nota do ${i+1}° aluno:`))
    soma += notas
}


media = soma / quantidadeAlunos

console.log(`Média: ${media}`)