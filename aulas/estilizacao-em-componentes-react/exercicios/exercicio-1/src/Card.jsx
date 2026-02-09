import styles from "./Card.module.css";

function Card ({ imagem, titulo, desc}){
    return (
        <div className="container">
            <div className={styles.card}>
                <img 
                src={imagem} 
                alt={titulo} 
                className={styles.imagem}
                />

                <div className={styles.descricao}>
                    <h2 className={styles.titulo}>{titulo}</h2>
                    <p className={styles.desc}>{desc}</p>
                </div>
            </div> 
        </div>
        
    )
}

export default Card;