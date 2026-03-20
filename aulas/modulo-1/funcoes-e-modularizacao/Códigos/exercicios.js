function tipoGeometria(){
    var objeto= prompt("Escreva o tipo de geometria que você deseja calcular a área: ");
    return objeto;
}

function areas(forma){
    let b;
    let h;
    let B;
    if(forma === "trapézio" || forma === "triângulo" || forma === "retângulo"){
        b = Number(prompt(forma === "trapézio"?'Digite o valor da base menor:':'Digite o valor da base:'))
        if(forma === "trapézio"){
            B = Number(prompt("Digite o valor da base maior:"));
        }
        h = Number(prompt("Digite o valor da altura: "))

        console.log(calcArea(b,B,h,forma));
    } else {
        console.log("O cálculo para essa forma ainda não está disponível.");
    }

}

function calcArea(b, B, h, forma){
    let areaRet;
    let areaTri;
    let areaTrape;

    if(forma === "retângulo") {
        areaRet = b * h;
        return areaRet;
    } else if(forma === "triângulo") {
        areaTri = (b * h) / 2
        return areaTri;
    } else if(forma === "trapézio") {
        areaTrape = ((B + b) * h) / 2
        return areaTrape;
    } 
}

let objeto;
let resultado;

objeto = tipoGeometria();
resultado = areas(objeto)
