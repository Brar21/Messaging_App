import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useRef} from 'react';

function App() {
    const [name,setName]=useState("");
    //const [renderCount,setRenderCount]=useState(0)//bad practice
    //const renderCount=useRef(1)
//    useEffect(() =>
//    {
//    //setRenderCount(prev=>prev+1)
//        renderCount.current=renderCount.current+1
//}) //simple way
    const inputRef=useRef();
    function focus()
    {
        inputRef.current.focus()
        inputRef.current.value="useRef Hook";
        
    }
  return (
    <div className="App">
          <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
          <div>My Name is {name}</div>
          {/*<div>I rendered {renderCount.current} times</div>*/}
          <button onClick={focus}>Focus</button>
    </div>
  )
}

export default App
