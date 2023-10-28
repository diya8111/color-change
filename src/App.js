
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [color,setColor]= useState('yellow')
  const click = color =>{
    setColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  return (
    <div  className="container text-center ">
    <div  >
      <h1>Background Color Change</h1>
        <button className='ms-2 rounded-5' onClick={
          ()=> click('yellow')
        }>yellow</button>
  
  <button className='ms-2 rounded-5 shadow'onClick={
          ()=> click('blue')
        }>BLUE</button>
         <button className='ms-2 rounded-5'onClick={
          ()=> click('red')
        }>RED</button>
         <button className='ms-2 rounded-5' onClick={
          ()=> click('green')
        }>GREEN</button>
    </div>
    </div>
  );
}

export default App;
