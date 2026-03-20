// Cor
const div = document.getElementById("minhaDiv");

div.addEventListener("mouseover", function(){
    this.style.backgroundColor = "orange";
});

div.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
});

div.addEventListener("click", function(){
    console.log("O elemento foi clicado");
});

div.addEventListener("dblclick", function(){
    this.style.backgroundColor = "red";
});

// Cliques
let contador = 0;

document.getElementById("botaoContador").addEventListener("click", function(){
    contador++;
    document.getElementById("resultado").innerHtml = "<h1>Texto Grande</h1>"
});

document.getElementById("botaoContador").addEventListener("dblclick", function(){
    contador = 0;
    document.getElementById("resultado").textContent = contador;
})
