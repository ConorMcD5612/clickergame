import logo from './logo.svg';
import './App.css';
import { Count } from './components/Count';
import {useState} from 'react'
import { Item } from './components/Item';

function App() {
  const [count, setCount] = useState(0)
  const [cps, setCps] = useState(0)


  return (
    <div className="App">
    <Count count={count} setCount={setCount}  cps={cps}/>
    <Item multi={1} price={1} count={count} setCount={setCount} setCps={setCps} cps={cps} /> 
    <Item multi={5} price={5} count={count} setCount={setCount} setCps={setCps} cps={cps} />
    <Item multi={10} price={10} count={count} setCount={setCount} setCps={setCps} cps={cps} />
   
    </div>
  );
}

export default App;
