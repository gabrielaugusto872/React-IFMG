let nomeUsuario
let senhaUsuario
let nomeCadastrado = "Gabriel"
let senhaCadastrada = "senha123"

nomeUsuario = prompt("Digite o nome de usuário:")
senhaUsuario = prompt("Digite a senha:")

if (nomeUsuario === "admin" && senhaUsuario === "123456"){
    console.log("Acesso de administrador")
} else if (nomeUsuario === nomeCadastrado && senhaUsuario === senhaCadastrada){
    console.log("Acesso de usuário")
} else {
    console.log("Acesso negado")
}