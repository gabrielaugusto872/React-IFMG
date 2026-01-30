import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import App from '../App';
import Contacts from '../components/Contacts';
import About from '../components/About';

function Nav(){
    return(
        <>  
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/contatos">Contatos</Link> | {" "}
                <Link to="/sobre">Sobre</Link>
            </nav>

            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/contatos" element={<Contacts/>} />
                <Route path="/sobre" element={<About/>}/>
            </Routes>
        </>
        
    )
}

export default Nav;