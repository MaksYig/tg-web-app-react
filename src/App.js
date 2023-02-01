import { useEffect } from 'react';
import Btn from './components/button/Button';
import './App.css';
const tg = window.Telegram.WebApp;



function App() {

  useEffect(()=>{
    tg.ready()
  },[])

  return (
    <div className="App">
      <Btn/>
    </div>
  );
}

export default App;
