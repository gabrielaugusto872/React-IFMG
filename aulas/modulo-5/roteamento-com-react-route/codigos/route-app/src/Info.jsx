import { NavLink, Outlet, useParams } from "react-router-dom";

const navLinkStyles = ({isActive}) => ({
    color: isActive ? '#0014c7' : '#007bff' ,
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
})

function Info() {
    const {nome} = useParams();
    return (
        <>
            <h1>Escolha o seu Usuário</h1>
            <nav style={{marginBottom:"20px"}}>
                <NavLink to="customer/Emil" style={navLinkStyles}>Emil</NavLink> | {" "}
                <NavLink to="customer/Tobias" style={navLinkStyles}>Tobias</NavLink> | {" "}
                <NavLink to="customer/Linus" style={navLinkStyles}>Linus</NavLink>
            </nav>
            {nome && <h1>Olá, {nome}!</h1>}
        </>
        
    );
}

export default Info;