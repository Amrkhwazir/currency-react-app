import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [anotherCountry, setAnotherCountry] = useState('');

 async function callApi(){
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${search}&from=${country}&to=${anotherCountry}`);
    const data = await res.json();
      setQuery(data);
  console.log(data)
  }
  useEffect(()=>{
    callApi()
  },[search])
  return (
    <div className="App">

     <input value={search} onChange={(e)=>setSearch(e.target.value)} />
     <select onChange={(e)=>console.log(setCountry(e.target.value))}>
      <option>ISK</option>
      <option>USD</option>
      <option>INR</option>
      <option>MXN</option>
     </select>
     <select onChange={(e)=>console.log(setAnotherCountry(e.target.value))}>
      <option>AUD</option>
      <option>BGN</option>
      <option>CHF</option>
      <option>HKD</option>
     </select>
    <>
   {console.log(query?.rates?.CHF)}
   <h1>{query?.rates?.CHF}</h1>
    </>
    
    </div>
  );
}

export default App