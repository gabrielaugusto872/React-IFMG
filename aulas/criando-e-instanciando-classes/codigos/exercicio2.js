class Aluno{
    constructor(nome){
        this.nome = nome;
        this.notas = new Array();
    }

    obterNome(){
        return this.nome;
    }

    adicionarNota(nota){
        this.notas.push(nota);
    }

    calcularMedia(){
        let soma = 0;
        let media;

        if (this.notas.length === 0){
            return 0;
        } else {
            for (let i=0;i<this.notas.length;i++){
            soma = soma + this.notas[i];
            }
            media = soma / this.notas.length;
        }
        return media;
    }
}

let a1 = new Aluno("Gabriel")

a1.adicionarNota(4);
a1.adicionarNota(6);


console.log(a1.calcularMedia());

a1.adicionarNota(2);

console.log(a1.calcularMedia());