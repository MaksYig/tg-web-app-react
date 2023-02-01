import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
import  Button from "./components/button/Button"


function App() {

  useEffect(()=>{
    tg.ready()
  },[])

  return (
    <div className="App">
      <Button/>
    </div>
  );
}

export default App;
