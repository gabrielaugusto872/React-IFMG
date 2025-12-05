console.log("Início do programa");

let nome ="IFMG";

try{
   console.log(nome); 
} catch(erro){
    console.log("Tipo do erro: " + erro.name);
    console.log("Detalhe do erro: " + erro.message);
} finally{
    console.log("Fim do try-catch");
}


console.log("Fim do programa");

console.log(" ");


try{
    let a = Number(prompt("Digite o valor de a: "));
    let b = Number(prompt("Digite o valor de b: "));
    let resultado = a/b;

    if(isNaN(resultado)){
        throw new Error("Valores Inválidos!");
    }
    if(resultado === Infinity || resultado === -Infinity){
        throw new Error("Divisão por zero!");
    }
    alert(resultado);
} catch (erro){
    console.log("Erro: " + erro.name);
    console.log("Detalhe: " + erro.message);
}