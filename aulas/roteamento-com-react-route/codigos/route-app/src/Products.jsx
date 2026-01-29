import {Routes, Route, Link, Outlet } from 'react-router-dom';

function Products() {
    return (
        <div>
            <h1>Página de Produtos</h1>
            <nav style={{ marginBottom: '20px '}}>
                <Link to="Car">Carros</Link> | {" "}
                <Link to="Bikes">Motos</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Products;