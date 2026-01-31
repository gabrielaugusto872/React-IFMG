import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './body/Header'
import Nav from './body/Nav'
import Main from './body/Main'
import Footer from './body/Footer'

import Contacts from './components/Contacts';
import About from './components/About'; 

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Nav/>

        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/contatos" element={<Contacts />} />
          <Route path="/sobre" element={<About />} />
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
