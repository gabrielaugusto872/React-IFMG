import { useContext } from "react";
import { ThemeContext } from './SelectTheme';

function BotaoSeletor(){
    const {theme, setTheme} = useContext(ThemeContext);

    function alternaTema(){
        setTheme(theme === "Ligth" ? "Dark" : "Ligth");
    }

    return (
        <>
            <button onClick={alternaTema}> {theme === "Ligth" ? "Dark" : "Ligth"}</button>
        </>
    )
}

export default BotaoSeletor;