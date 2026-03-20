import { useState } from "react";

function Contador(){
    const [cont, setCont] = useState(0);

    const aumenta = () => setCont(cont + 1);

    return (
        <>
            <h3>{cont}</h3>
            <button onClick={aumenta}>Incrementar</button>
        </>
    )
}

export default Contador;