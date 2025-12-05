function alerta(){
    alert("Olá Mundo!");
}

alerta();

function nome(name){
    alert(`Olá ${name}`);
}

nome("Gabriel")

function saudacao(nome){
    console.log(`Olá ${nome}`);
    return (`Olá ${nome}`)
}

let saida = saudacao("Augusto")
console.log(saida) 
