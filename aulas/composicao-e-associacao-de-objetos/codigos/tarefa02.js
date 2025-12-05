class Departamento{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }

    get nome(){
        return this.#nome;
    }
}

class Empresa{
    #nome;#departamentos;
    constructor(nome){
        this.#nome = nome;
        this.#departamentos = [];
    }

    get nome(){
        return this.#nome;
    }

    adicionarDepartamento(departamento){
        this.#departamentos.push(departamento);
    }

    listarDepartamentos(){
        if(this.#departamentos.length === 0){
            console.log("Nenhum departamento cadastrado!");
            return;
        }
        console.log("Departamentos: ");
        for(let i=0;i<this.#departamentos.length;i++){
            console.log(`- ${this.#departamentos[i].nome}`)
        }
    }
}

let d1 = new Departamento("TI");
let d2 = new Departamento("RH");
let d3 = new Departamento("Finanças");

let e1 = new Empresa("IFMG");

e1.adicionarDepartamento(d1);
e1.adicionarDepartamento(d2);
e1.adicionarDepartamento(d3);

e1.listarDepartamentos();