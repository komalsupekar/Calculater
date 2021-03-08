import './App.css';
import { useState,useEffect,useRef } from 'react';

function App() {
  const[res,setRes]=useState("");
  const inputRef=useRef(null);

  useEffect(()=>inputRef.current.focus());

  function handleclick(e){
    setRes(res+e.target.name);
  }
  function backspace(){
    setRes(res.slice(0,-1));
  }

  function Clear(){
    setRes("");
  }
  function calculate()
  {
    try{
      setRes(eval(res).toString());
    }catch(error){
      setRes("Error");
    }
  }
  return (
    <div className="cal_App">
       <input type="text" value={res} ref={inputRef}></input>
     <div className="keybord">
       <button id="clr" onClick={Clear}>AC</button>
       <button id="backspace" onClick={backspace}>C</button>
       <button name="*" onClick={handleclick}>*</button>
       <button name="1" onClick={handleclick}>1</button>
       <button name="2" onClick={handleclick}>2</button>
       <button name="3" onClick={handleclick}>3</button>
       <button name="/" onClick={handleclick}>/</button>
       <button name="4" onClick={handleclick}>4</button>
       <button name="5" onClick={handleclick}>5</button>
       <button name="6" onClick={handleclick}>6</button>
       <button name="+" onClick={handleclick}>+</button>
       <button name="7" onClick={handleclick}>7</button>
       <button name="8" onClick={handleclick}>8</button>
       <button name="9" onClick={handleclick}>9</button>
       <button name="-" onClick={handleclick}>-</button>
       <button name="0" onClick={handleclick}>0</button>
       <button name="." onClick={handleclick}>.</button>
       <button  id="res" onClick={calculate}>=</button>
     </div>
    </div>
  );
}

export default App;
