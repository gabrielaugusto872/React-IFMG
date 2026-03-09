import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Products from './Products';
import CarProducts from "./produtos/CarProducts";
import BikeProducts from "./produtos/BikeProducts";
import Info from './Info';

const navLinkStyles = ({isActive}) => ({
    color: isActive ? '#0014c7' : '#007bff' ,
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
})

function Rota() {
    return (
        <>
            <BrowserRouter>
                <nav style={{ marginBottom: '20px' }}>
                    <NavLink to="/" style={navLinkStyles}>Home </NavLink> | {" "}
                    <NavLink to ="/usuario" style={navLinkStyles}>Usuários</NavLink> | {" "}
                    <NavLink to="/products" style={navLinkStyles}>Nossos Produtos</NavLink> | {" "}
                    <NavLink to="/about" style={navLinkStyles}>Sobre </NavLink> | {" "}
                    <NavLink to="/contact" style={navLinkStyles}>Contatos</NavLink>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/usuario" element={<Info/>}>
                        <Route path="customer/:nome" element={<Info/>} />
                    </Route>
                    <Route path="/products" element={<Products/>}>
                        <Route path="car" element={<CarProducts />} />
                        <Route path="bikes" element={<BikeProducts />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}

export default Rota;