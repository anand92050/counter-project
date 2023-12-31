import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  let [counter,setCounter] = useState(5);
  
  //"useState" hook array return karta hai 
  //50 will be passed to counter in let
  //setCounter is a method that can directly update the "counter"
  //  let counter = 5 ;
  
    const addValue = ()=>{
      console.log("value added ",counter)
      // counter = counter+1;
      if(counter<20)
      {
        setCounter((prev)=>prev+1)
      }
      
    }
  
  
  const subValue = ()=>{
    // counter = counter-1;
    if(counter>0)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai AUR react</h1>
      <h2>Counter Value:{counter}</h2>
      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <button
      onClick={subValue}
      >remove button {counter}</button>
      <p>Again write {counter}</p>
    </>
  )
}

export default App
