import NavBar from './components/Navbar/Navbar';
import {useTelegram} from './Hooks/useTelegram';
import './App.css';
import { useEffect } from 'react';




function App() {
  const {tg,onToggleButton}=useTelegram();
  useEffect(()=>{
    tg.ready();
  },[])

  return (
    <div className="App">
      <NavBar/>
      <button onClick={onToggleButton}>Toggle </button>

    </div>
  );
}

export default App;
