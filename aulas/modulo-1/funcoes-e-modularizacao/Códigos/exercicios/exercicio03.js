function celsiusParaFahrenheit (temperatura){
    let conversao;
    conversao = (temperatura * (9/5)) + 32
    return conversao;
}

function fahrenheitParaCelsius(temperatura){
    let conversao;
    conversao = (temperatura - 32) * (5/9)
    return conversao;
}

function celsiusParaKelvin(temperatura){
    let conversao;
    conversao = temperatura + 273.15
    return conversao;
}

function converterTemperatura(temperatura, escalaAtual, escalaDesejada){
    if(escalaAtual === 'C'){
        if (escalaDesejada === 'F'){
           temperatura = celsiusParaFahrenheit(temperatura);
           return temperatura;
        } else if(escalaDesejada === 'K'){
            temperatura = celsiusParaKelvin(temperatura);
            return temperatura;
        } else {
            console.log("Conversão não permitida");
        }
    } else if(escalaAtual === 'F' && escalaDesejada === 'C'){
        temperatura = fahrenheitParaCelsius(temperatura);
        return temperatura;
    } else {
        console.log("Conversão não permitida");
    }
}

console.log(converterTemperatura(25, "C", "F"));
console.log(converterTemperatura(98.6, "F", "C"));
console.log(converterTemperatura(25, "C", "K"));