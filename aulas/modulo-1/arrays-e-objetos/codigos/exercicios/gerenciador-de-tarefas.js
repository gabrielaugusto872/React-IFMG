let tarefas = [];
let proximoId = 1;

function adicionarTarefa(descricao, prioridade){
    let tarefa = {
        id: proximoId++,
        descricao: descricao,
        concluida: false,
        prioridade: prioridade
    };
    tarefas.push(tarefa);
}

function listarTarefas(){
    for(let i=0;i<tarefas.length;i++){
        console.log(tarefas[i]);
    }
}

function marcarComoConcluida(id){
    for(let i=0;i<tarefas.length;i++){
        if(tarefas[i].id == id){
            tarefas[i].concluida = true;
            return;
        }
    }
    console.log("Tarefa não encontrada.");
}

function removerTarefa(id){
    for(let i=0;i<tarefas.length;i++){
        if(tarefas[i].id == id){
            delete tarefas[i];
            return;
        }
    }
    console.log("Tarefa não encontrada.");
}

function menu(opcao){
    let descricao;
    let prioridade;
    let id;
    switch(opcao){
        case 1:
            descricao = prompt("Digite a descrição da tarefa:");
            prioridade = prompt("Qual a prioridade dessa tarefa?");
            adicionarTarefa(descricao, prioridade);
            break;
        case 2:
            listarTarefas();
            break;
        case 3:
            id = prompt("Digite o ID da tarefa:")
            marcarComoConcluida(id);
            break;
        case 4:
            id = prompt("Digite o ID da tarefa:")
            removerTarefa(id);
            break;
        default:
            console.log("Opção Inválida!")
    }
}

let opcao = -1;

while (opcao !== 0){
    console.log(" ");
    console.log("GERENCIADOR DE TAREFAS");
    console.log("1 - Adicionar tarefa.");
    console.log("2 - Listar tarefas.");
    console.log("3 - Marcar tarefa como concluída.");
    console.log("4 - Remover tarefa.");
    console.log("0 - Sair.");
    console.log(" ");

    opcao = Number(prompt("Escolha de acordo com o que deseja:"));
    menu(opcao);
}
