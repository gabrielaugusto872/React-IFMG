import { useState, useEffect, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import Component2 from './Component2';


function Component1() {
    const [user, setUser] = useState("Gabriel");

    return (
        <UserContext.Provider value ={user}>
            <h1>{`Olá ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

export const UserContext = createContext();
export default Component1;
