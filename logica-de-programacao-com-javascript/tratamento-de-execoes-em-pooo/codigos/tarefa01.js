class NegativoError extends Error{
    constructor(){
        super("O número deve ser positivo.");
        this.name = "NegativoError";
    }
}

class Nan extends Error{
    constructor(){
        super("Valor Inválido!")
        this.name = "Nan";
    }
}

function calcularRaiz(valor){
    if(isNaN(valor)){
        throw new Nan();
    }
    if(valor < 0){
        throw new NegativoError();
    }
    return Math.sqrt(valor);
}

try{
    console.log(calcularRaiz("a"));
} catch (erro){
    console.log(`Erro capturado: ${erro.message}`);
}