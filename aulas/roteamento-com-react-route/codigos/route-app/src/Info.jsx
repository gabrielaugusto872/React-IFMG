import { Link, Outlet, useParams } from "react-router-dom";

function Info() {
    const {nome} = useParams();
    return (
        <>
            <h1>Escolha o seu Usuário</h1>
            <nav style={{marginBottom:"20px"}}>
                <Link to="/customer/Emil">Emil</Link> | {" "}
                <Link to="/customer/Tobias">Tobias</Link> | {" "}
                <Link to="/customer/Linus">Linus</Link>
            </nav>
            {nome && <h1>Olá, {nome}!</h1>}
        </>
        
    );
}

export default Info;