import TaskList from './TaskList';
import Header from './Header';
import '../styles/App.css'
import TrocaTema from './TrocaTema';
import Rota from '../route/Rota';

function App() {
  return (
    <div className="container">
      <Header/>
      <Rota/>
      <TrocaTema />
    </div>
  );
}

export default App
