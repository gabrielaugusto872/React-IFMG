import { BrowserRouter} from 'react-router-dom';
import Header from './body/Header'
import Nav from './body/Nav'
import Main from './body/Main'
import Footer from './body/Footer'

import './App.css'

function App() {

  return (
    <div className="container">
      <Header/>
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
      
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
