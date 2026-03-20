function somar(num1, num2){
    let soma;
    soma = num1 + num2;
    return soma;
}

function subtrair(num1, num2){
    let subtracao;
    subtracao = num1 - num2;
    return subtracao;
}

function multiplicar(num1, num2){
    let multiplicacao;
    multiplicacao = num1 * num2;
    return multiplicacao;
}

function dividir(num1, num2){
    let divisao;

    if (num2 !== 0){
        divisao = num1 / num2;
        return divisao;
    } else {
        console.log("Não é possivel fazer divisão por 0!");
    }
}

function calcular(num1, num2, operacao){
    switch(operacao){
        case "somar":
            resultado = somar(num1, num2);
            return resultado;
            break;
        case "subtrair":
            resultado = subtrair(num1, num2);
            return resultado;
            break;
        case "multiplicar":
            resultado = multiplicar(num1, num2);
            return resultado;
            break;
        case "dividir":
            resultado = dividir(num1, num2);
            return resultado;
            break;
    }
}

console.log(calcular(5,3, "somar"));
console.log(calcular(5,3, "subtrair"))
console.log(calcular(5,3, "multiplicar"))
console.log(calcular(6,3, "dividir"))

