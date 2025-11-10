function RecipeCard(){
    class Receita {
        constructor(nome, tempo, nivel, ingredientes, preparo){
            this.nome = nome;
            this.tempo = tempo;
            this.nivel = nivel;
            this.ingredientes = ingredientes;
            this.preparo = preparo;
        }

        converteTempo(){
            if (this.tempo > 60){
                this.tempo /= 60;
                this.tempo += " horas."
            } else {
                this.tempo += " minutos."
            }
        }

        estiliza(){
            if(this.nivel === "Fácil"){
                return "green";
            } else if(this.nivel === "Médio"){
                return "yellow";
            } else if(this.nivel === "Difícil"){
                return "red";
            }
        }
    }
    

    let boloDeCenoura = new Receita(
        "Bolo de Cenoura",
        50,
        "Fácil",
        ["3 cenouras médias picadas",
        "3 ovos",
        "1 xícara de óleo",
        "2 xícaras de açúcar",
        "2 e ½ xícaras de farinha de trigo",
        "1 colher (sopa) de fermento em pó"
        ],
        "Bata no liquidificador as cenouras, os ovos e o óleo até formar um creme homogêneo. Em seguida, misture o restante dos ingredientes e leve para assar por 40 minutos a 180°C."
    ) 
    
    boloDeCenoura.converteTempo();

    return(
        <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "2px solid black",
            borderRadius: "10px",
            padding: "20px",
            width: "300px",
            textAlign: "center",
            margin: "20px auto",
            backgroundColor: boloDeCenoura.estiliza(),
            color: boloDeCenoura.nivel === "Médio" ? "black" : "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}>
            <h1>{boloDeCenoura.nome}</h1>
            <p><strong>Tempo de preparo: {boloDeCenoura.tempo}</strong></p>
            <h2>Ingredientes</h2>
            <ul>
                {boloDeCenoura.ingredientes.map((ingredientes, indice) => (
                    <li key={indice}>{ingredientes}</li>
                ))}
            </ul>
            <h2>Modo de Preparo</h2>
            <p>{boloDeCenoura.preparo}</p>
        </div>
           

        </>
    )




} ReactDOM.render(<RecipeCard/>, document.getElementById("root"));