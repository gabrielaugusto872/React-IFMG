const input = document.getElementById("meuInput");

input.addEventListener("keydown", function(event){
    console.log(`Tecla: ${event.key}, Código: ${event.code}`);

    if (event.key === "Enter"){
        console.log("Tecla Enter pressionada!")
    }
});
