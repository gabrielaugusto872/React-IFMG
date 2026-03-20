import { useState, createContext } from 'react';
import BotaoSeletor from './BotaoSeletor';
import Pagina from './Pagina';

export const ThemeContext = createContext();

function SelectTheme(){
    const [theme, setTheme] = useState("Ligth");
    const [estiloPagina, setEstiloPagina] = useState({});

    return(
        <div style={estiloPagina}>
            <ThemeContext.Provider value={{theme, setTheme, setEstiloPagina}}>
                <h1>Tema: {theme}</h1>
                <BotaoSeletor />
                <Pagina />
            </ThemeContext.Provider> 
        </div>
        
    )
}

export default SelectTheme;