import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
          <h1>Counter : {count}</h1>
          <button>+</button>
          <button>-</button>
          
    </div>
  )
}

export default App
