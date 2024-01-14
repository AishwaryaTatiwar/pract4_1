import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react'


function App() {
  const[add,setAdd]=useState(0);
  const[multi,setMulti]=useState(1);
  const[clicked,setClicked]=useState(0);

 function both()
 {
  setAdd(add+1);
  setMulti(multi*2);
} 
  return (
    <>
    <h1>
Addition is {add} <br></br>

    Multiplication is {multi}</h1>
    <button onClick={()=>setAdd(add+1)} className="Add">Add</button> &nbsp;
    <button onClick={()=>setMulti(multi*2)} className="Multi"> Multi</button> &nbsp;
<button onClick={both} className="Both">Both</button> &nbsp;

<br></br>
<br></br>
<button onClick={()=>setClicked(clicked+1)} className="button">Click me !</button>

<h1>Number of times button clicked :{clicked}</h1>
    </>
   
  );
}

export default App;



