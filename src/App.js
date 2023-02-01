import NavBar from './components/Navbar/Navbar';
import {useTelegram} from './Hooks/useTelegram';
import './App.css';
import { useEffect } from 'react';
import {Route,Routes} from 'react-router-dom'; 
import Form from './components/Form/Form'




function App() {
  const {tg}=useTelegram();
  useEffect(()=>{
    tg.ready();
  },)

  return (
    <div className="App">
      <NavBar/>
      <Routes>
{/*         <Route index element={}/> */}
        <Route path={'form'} element={<Form/>}/>

      </Routes>
    </div>
  );
}

export default App;
