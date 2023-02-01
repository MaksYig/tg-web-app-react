import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
import  Button_btn from "./components/button/Button"


function App() {

  useEffect(()=>{
    tg.ready()
  },[])

  return (
    <div className="App">
      <Button_btn/>
    </div>
  );
}

export default App;
