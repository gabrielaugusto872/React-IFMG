import { useState } from 'react';
import '../styles/Lampada.css';

function Lampada(){
    const [luz, setLuz] = useState("rgb(59, 59, 59)");
    const [interruptor, setInterruptor] = useState("Ligar")

    function alternarLuz(){
        if (luz === "rgb(59, 59, 59)") {
            setLuz("rgb(255, 238, 0)");
            setInterruptor("Desligar");
        } else {
            setLuz("rgb(59, 59, 59)");
            setInterruptor("Ligar");
        }
    }

    return(
        <div className="cor" style={{ backgroundColor: luz}}>
            <div className="lampada">
                <button onClick={alternarLuz}>{interruptor}</button>
            </div>
        </div>
        
    )
}

export default Lampada;