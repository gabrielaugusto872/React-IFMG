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
    #nome;
    #departamentos;
    constructor(nome, empresa){
        this.#nome = nome;
        this.#departamentos = [];
    }
    get nome (){
        return this.#nome;
    }
}

class Motor{
    #tipo;
    constructor(tipo){
        this.#tipo = tipo;
    }
    ligar(){
        console.log("Motor ligado!");
    }
}

class Carro{
    #modelo;
    #motor;
    constructor(modelo, tipoMotor){
        this.#modelo = modelo;
        this.#motor = new Motor(tipoMotor);
    }
    ligarCarro(){
        this.#motor.ligar();
    }
}
