// Salvando forms e inputs
const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");

// Salavando erros
const erroNome = document.getElementById("nomeErro");
const erroEmail = document.getElementById("emailErro");
const erroSenha = document.getElementById("senhaErro");
const erroConfirmaSenha = document.getElementById("confirmaSenhaErro");


document.getElementById("formCadastro").addEventListener("submit", function(event){
    event.preventDefault(); // Travando envio

    let temErro = false;

    // Limpando erros
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    erroConfirmaSenha.textContent = "";

    if(nome.value.trim().length < 3){
        erroNome.textContent = "O nome deve ter mais de 3 caracteres";
        temErro = true;
    } // Nome 3 caracteres
    
    if (!email.value.includes('.')){
        erroEmail.textContent = "Seu e-mail deve conter . e @";
        temErro = true;
    } // Email ter .

    if (senha.value.length < 6 || !/\d/.test(senha.value)){
        erroSenha.textContent = "A senha deve ter no mínimo 6 digitos e pelo menos um número.";
        temErro = true;
    } // Senha ter 6 digitos e 1 número

    if (senha.value !== confirmaSenha.value){
        erroConfirmaSenha.textContent = "As duas senhas devem ser iguais. "
        temErro = true;
    } // Senhas iguais

    if(!temErro){
        alert("Cadastro feito com sucesso!")
        form.submit();

    }
});

