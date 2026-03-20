import { NavLink} from "react-router-dom";

function ProjectList(){
    const projetos = [
        {id: 1, titulo: "Gerenciador de Tarefas"},
        {id: 2, titulo: "Calculadora"},
        {id: 3, titulo: "Sala de Espera"}
    ];

    const navLinkStyles = ({isActive}) => ({
        color: isActive ? '#0014c7' : '#007bff' ,
        textDecoration: isActive ? 'none' : 'underline',
        fontWeight: isActive ? 'bold' : 'normal',
        padding: '5px 10px'
    })

    return (
        <>
            <h1>Lista de projetos</h1>

            <div className="listaProjetos">
                <nav style={{ marginBottom: '20px' }}>
                    {projetos.map((p) => (
                        <div key={p.id}>
                            <NavLink to={`/projetos/${p.id}`} style={navLinkStyles}>{p.titulo}</NavLink>
                        </div>
                    ))}
                </nav>
            </div>
            
        </>
        
    )
}

export default ProjectList;