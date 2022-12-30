import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")

  return (
    <div className="App">
          <input value={name} onChange={e => setName(e.target.value)} />
          <div>My Name is {name}</div>
     
    </div>
  )
}

export default App
