import { useState } from 'react';

export function Contador(){
    const [count, setCount] = useState(0)

    return (
        <>
            <span>{count}</span><br />
            <button onClick={() => setCount((count) => count + 1)}>Incrementar</button>
        </>
    )
}