    let itens = [];
    let proximoId = 1;

    function adicionarItem(nome, preco){
        let item = {
            id: proximoId++,
            nome: nome,
            valor: preco
        };
        itens.push(item);
    };

    function mostrarItens(){
        if(itens.length === 0){
            console.log("Nenhum item cadastrado!");
            return;
        }
        console.log("Itens cadastrados:");
        for(let i=0;i<itens.length;i++){
            console.log(`ID: ${itens[i].id}, Item: ${itens[i].nome}, Preço: ${itens[i].valor}`);
        }
    }

    function atualizarItem(id, preco){
        for(let i=0;i<itens.length;i++){
            if(id === itens[i].id){
                itens[i].valor = preco;
                return;
            };
        };
        console.log("Item não encontrado!")
    };

    function removerItem(id){
        for(let i=0;i<itens.length;i++){
            if(id === itens[i].id){
                itens.splice(i, 1);
                return;
            };
        };
        console.log("Item não encontrado!")
    };

    function menu(opcao){
        let nome;
        let preco;
        let id;
        switch(opcao){
            case 1:
                nome = prompt("Digite o nome do item:");
                preco = Number(prompt("Digite o preço do item:"));
                adicionarItem(nome, preco);
                break;
            case 2:
                mostrarItens();
                break;
            case 3:
                id = Number(prompt("Digite o ID do item:"));
                preco = Number(prompt("Digite o novo preço do item:"))
                atualizarItem(id, preco);
                break;
            case 4:
                id = Number(prompt("Digite o ID do item:"));
                removerItem(id)
                break;
            case 0:
                console.log("Saindo do sistema...")
                break;
            default:
                console.log("Opção Inválida!")
        }
    }

    let opcao = -1;

    while (opcao !== 0){
        opcao = Number(prompt("Digite a opção desejada: "));
        menu(opcao);
    }
    

