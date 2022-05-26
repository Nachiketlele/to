
import { useState } from 'react';
import './App.css';
import Api from "./components/Api"
import Timer from './components/Timer';

function App() {
const [toogle,setToogle]=useState(false)
 

  return (
    <div className="App">
      <button onClick={()=>setToogle(!toogle)} >App</button>
      {toogle?<Api/>:<Timer/>}
       
    </div>
  );
}

export default App;
