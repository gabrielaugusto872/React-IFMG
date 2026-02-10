import { useContext, useEffect } from "react";
import { ThemeContext } from "./SelectTheme";

function Pagina (){
    const {theme, setEstiloPagina} = useContext(ThemeContext);

    const estilos = {
        Light: {
            backgroundColor: "#f5f5f5",
            color: "#222",
            padding: "20px",
            minHeight: "200px",
            borderRadius: "8px"
        },
        Dark: {
            backgroundColor: "#222",
            color: "#f5f5f5",
            padding: "20px",
            minHeight: "200px",
            borderRadius: "8px"
        }
    };

    useEffect(() => {
        setEstiloPagina(estilos[theme]);
    }, [theme])
}

export default Pagina;