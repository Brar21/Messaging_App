import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    return (
   
      <div className="App">
          <h1>Counter : {count}</h1>
          <br />
          <br />
          <button onClick={()=>setCount(count+1)}>+</button>
          <button onClick={()=>setCount(count-1)}>-</button>
       
            </div>
          
  )
}

export default App
