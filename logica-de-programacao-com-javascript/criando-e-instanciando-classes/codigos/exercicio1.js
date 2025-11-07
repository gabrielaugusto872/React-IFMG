class Retangulo {
    constructor(nome, largura, altura){
        this.nome = nome;
        this.largura = largura;
        this.altura = altura;
    }

    obterNome(){
        return this.nome;
    }

    calcularPerimetro(){
        let perimetro;

        perimetro = (this.largura + this.altura) * 2;

        return perimetro;
    }

    calcularArea(){
        let area;

        area = this.largura * this.altura;

        return area;
    }

    atualizarLargura(novaLargura){
        this.largura = novaLargura;
    }

    atualizarAltura(novaAltura){
        this.altura = novaAltura;
    }
}

// Testando
let r1 = new Retangulo("R1", 3, 5);

console.log(r1.obterNome());
console.log(r1.calcularPerimetro());
console.log(r1.calcularArea());

r1.atualizarLargura(4);
r1.atualizarAltura(6);

console.log(r1);