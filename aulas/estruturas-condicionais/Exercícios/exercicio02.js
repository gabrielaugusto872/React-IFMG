let lado1;
let lado2;
let lado3;

lado1 = Number(prompt("Digite o primeiro lado do triângulo: "));
lado2 = Number(prompt("Digite o segundo lado do triângulo: "));
lado3 = Number(prompt("Digite o terceiro lado do triângulo: "));

if(lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado3 + lado2 > lado2){
    if(lado1 === lado2 && lado2 === lado3){
        console.log("Triângulo equilátero")
    } else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log("Triângulo isóceles")
    } else {
        console.log("Triângulo escaleno")
    }
} else {
    console.log("Esse lados não podem formar um triângulo!");
}