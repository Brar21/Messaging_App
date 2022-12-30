import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [name,setName]=useState("");
    const [renderCount,setRenderCount]=useState(0)
    useEffect(() =>
    {
    setRenderCount(prev=>prev+1)
})
  return (
    <div className="App">
          <input value={name} onChange={e => setName(e.target.value)} />
          <div>My Name is {name}</div>
          <div>I rendered {renderCount} times</div>
    </div>
  )
}

export default App
