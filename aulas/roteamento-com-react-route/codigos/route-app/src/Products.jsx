import {Routes, Route, NavLink, Outlet } from 'react-router-dom';

const navLinkStyles = ({isActive}) => ({
    color: isActive ? '#0014c7' : '#007bff' ,
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
})

function Products() {
    return (
        <div>
            <h1>Página de Produtos</h1>
            <nav style={{ marginBottom: '20px '}}>
                <NavLink to="Car" style={navLinkStyles}>Carros</NavLink> | {" "}
                <NavLink to="Bikes" style={navLinkStyles}>Motos</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default Products;