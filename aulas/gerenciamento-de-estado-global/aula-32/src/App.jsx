import Login from './components/Login'
import './App.css'
import Usuario from './components/Usuario'
import Logout from './components/Logout'
import BotaoSeletor from './components/BotaoSeletor'
import SelectTheme from './components/SelectTheme'
import ListaDeProdutos from './components/ListaDeProdutos'
import Carrinho from './components/Carrinho';

function App() {
  return (
    <>
      <ListaDeProdutos />
      <Carrinho />
    </>
  )
}

export default App
