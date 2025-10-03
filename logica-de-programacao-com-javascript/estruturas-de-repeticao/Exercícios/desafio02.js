let n;
let soma;
let n2;
let n1;

n = Number(prompt("Digite até onde a sequência deve ir"))

for(i=0;i<n;i++){
    if (i === 0){
        console.log("0")
        n2 = 0
    } else if (i === 1){
        console.log("1")
        n1 = 1
    } else {
        soma = n2 + n1;
        console.log(soma)
        n2 = n1;
        n1 = soma;
    }
}
