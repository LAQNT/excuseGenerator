import './App.css';
import { useState,  } from 'react';



function App() {
  const [data, setData] = useState();


    const fetchData = async(category) => {
      const response = await fetch(`https://excuser-three.vercel.app/v1/excuse/${category}`)
      const json = await response.json()
      setData(json)
    };
    console.log(data)

  return (
    <>
      <h1>Generate an excuse for </h1>
      <button onClick={() => fetchData('party')} > Party </button>     
      <button onClick={() => fetchData('office')}   > Office </button>     
      <button onClick={() => fetchData('funny')}   > Fun </button>     
      <button onClick={() => fetchData('unbelievable')}  > Unbelievable </button>     
      <button onClick={() => fetchData('developers')}  > Developers </button>     
      <h3>{data[0].excuse} </h3>

    </>
  );
}

export default App;
