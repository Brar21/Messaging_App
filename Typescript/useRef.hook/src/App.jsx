import {useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import './App.css';

function App() {
    const [name,setName]=useState("");

    const wordMemorise=useRef();
    //const [renderCounts,Setrender]=useState(0);
    //const renderCount=useRef(1);
    useEffect(() =>
    {
        wordMemorise.current=name;
        ////Setrender(prev=>prev+1)
        //renderCount.current=renderCount.current+1
    })

    const InputHighlight=useRef();

    function focus()
    {
        InputHighlight.current.focus()
        //InputHighlight.current.value="useRef Hook Video"
    }
  return (
    <div className="App">
          <input ref={InputHighlight} value={name} onChange={e => setName(e.target.value)} />
          <div>My input is {name}</div>
          <div>My last Entred words {wordMemorise.current}</div>
          <button onClick={focus}>Focus to Input tag</button>
          {/*<div>How many time render {renderCounts}</div>*/}

          {/*<div>How many time render {renderCount.current}</div>*/}
    </div>
  )
}

export default App
