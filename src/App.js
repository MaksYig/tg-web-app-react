import { useEffect } from 'react';
import Btn from './components/button/Button';
import NavBar from './components/Navbar/Navbar';
import './App.css';
const tg = window.Telegram.WebApp;



function App() {

  useEffect(()=>{
    tg.ready()
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Btn name='close'/> 
    </div>
  );
}

export default App;
