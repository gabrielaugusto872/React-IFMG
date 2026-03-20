function Profile (){
    let nome, profissao, cidade, foto;
    let botoes = "";

    function atualizaTela(){
        if (event.target.id === "cadastrar"){
            ReactDOM.render(<Exibe/>, document.getElementById("root"));
        } else if (event.target.id === "voltar"){
            ReactDOM.render(<Profile/>, document.getElementById("root"));
        }
    }

    function cadastra(){
        nome = document.getElementById("nome").value;
        cidade = document.getElementById("cidade").value;
        profissao = document.getElementById("profissao").value;
        foto = document.getElementById("foto").value;

        botoes = event.target.id;
        atualizaTela();
    }

    function Exibe(){
        return(
            <>
                <h1>Seu Perfil</h1>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    border: "2px solid black",   
                    borderRadius: "10px",        
                    padding: "60px",             
                    width: "300px",
                    textAlign: "center",
                    margin: "0 auto"
                    }}>
                    <div>
                        <img src={foto} alt="Foto de Perfil" width="150"/>
                        <h2>{nome}</h2>
                        <p>Cidade: {cidade}</p>
                        <p>Profissão: {profissao}</p>
                    </div>
                </div>
                <button id ="voltar" onClick = {atualizaTela}>Voltar</button>

            </>
        )
        
    }

    return(
        <>
            <h1>Cadastre seu Perfil!</h1>
            <input type="text" id="nome" placeholder="Digite o seu nome..." />
            <p></p>
            <input type="text" id="cidade" placeholder="Digite a sua cidade..." />
            <p></p>
            <input type="text" id="profissao" placeholder="Digite a sua profissão..." />
            <p></p>
            <input type="text" id="foto" placeholder="Insira aqui a URL da sua foto..." />
            <p></p>
            <button id="cadastrar" onClick={cadastra}>Enviar</button>
        </>
    )
} ReactDOM.render(<Profile/>, document.getElementById("root"));
