//1
function mostrarAlerta(){
    console.log("Botão foi clicado!");
}

//2
document.getElementById("meuBotao").onclick = function(){
    console.log("Botão 2 clicado!");
};

//3
document.getElementById("botao3").addEventListener("click",
    function(event){
        console.log("Tipo do evento:", event.type);
        console.log("Elemento alvo:", event.target);
        console.log("Elemento atual:", event.currentTarget);
        console.log("Timestamp:", event.timeStamp);
    }
);
