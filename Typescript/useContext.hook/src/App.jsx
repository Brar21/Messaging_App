import { useState,createContext,useContext } from 'react'
import './App.css'
const Count=createContext()
function App() {
  const [count, setCount] = useState(0)

    return (
      <Count.Provider value={count}>
      <div className="App">
          <h1>Counter : {count}</h1>
          <br />
          <br />
          <button onClick={()=>setCount(count+1)}>+</button>
          <button onClick={()=>setCount(count-1)}>-</button>
          <Counter2/>
            </div>
            </Count.Provider>
  )
}
function Counter2()
{
    return (
        <>
        <h1>Counter 2</h1>
        <Counter3/>
        </>
    )
}
function Counter3()
{
    return (
        <>
        <h1>Counter 3</h1>
        <Counter4/>
        </>
    )
}
function Counter4()
{
    return (
        <>
        <h1>Counter 4</h1>
            <Counter5 />
        </>
    )
}
function Counter5()
{
    const counter=useContext(Count)
    return (
        <>
        <h1>Counter 5</h1>
        <h2>{counter}</h2>
        </>
    )
}
export default App
