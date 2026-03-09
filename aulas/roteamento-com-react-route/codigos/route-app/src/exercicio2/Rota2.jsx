import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';
import Posts from './Posts';
import Error from './Error';

function Rota2 (){
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/posts">Postagens</Link> | {" "}
                    <Link to="/sobre">Sobre</Link> | {" "}
                    <Link to="/contato">Contato</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:id" element={<Posts />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rota2;