import Btn from './components/button/Button';
import NavBar from './components/Navbar/Navbar';
import {useTelegram} from './Hooks/useTelegram';
import './App.css';




function App() {
  const {user,onToggleButton}=useTelegram();
  
  return (
    <div className="App">
      <NavBar/>
      <Btn onClick={onToggleButton}/> 
      <div>{user}</div>
    </div>
  );
}

export default App;
