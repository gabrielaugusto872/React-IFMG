import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Products from './Products';
import CarProducts from "./produtos/CarProducts";
import BikeProducts from "./produtos/BikeProducts";
import Info from './Info';

function Rota() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/home">Home </Link> | {" "}
                    <Link to ="/">Usuários</Link> | {" "}
                    <Link to="/products">Nossos Produtos</Link> | {" "}
                    <Link to="/about">Sobre </Link> | {" "}
                    <Link to="/contact">Contatos</Link>
                </nav>

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Info/>}>
                        <Route path="/customer/:nome" element={<Info/>} />
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