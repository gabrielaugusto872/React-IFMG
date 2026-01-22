import { useState, createContext, useContext} from 'react';
import { createRoot } from 'react-dom/client';
import { UserContext } from './Component1';

function Component3() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 3</h1>
            <h2>{`Olá novamente ${user}!`}</h2>
        </>
    );
}

export default Component3;