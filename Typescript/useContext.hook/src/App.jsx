import { useState,useContext,createContext } from 'react'
import './App.css'
const CountContext=createContext()
function App() {
  const [count, setCount] = useState(0)

    return (
   <CountContext.Provider value={count}>
      <div className="App">
          <h1>Counter : {count}</h1>
          <br />
          <br />
          <button onClick={()=>setCount(count+1)}>+</button>
          <button onClick={()=>setCount(count-1)}>-</button>
       <Counter2/>
            </div>
         </CountContext.Provider>
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
    const Counter3value=useContext(CountContext)
    return (
        <>
            <h1>Counter 3</h1>
            <h2>{`counter 1 value is ${Counter3value}`}</h2>
            <Counter4/>
        </>
    )
}function Counter4()
{
    return (
        <>
            <h1>Counter 4</h1>
            <Counter5/>
        </>
    )
}function Counter5()
{
    const [name,setName]=useState("Varinder")
    const countervalue=useContext(CountContext)
    return (
        <>
            <h1>Counter 5</h1>
            <h3 onClick={()=>setName("Varinder Brar")}>{name}</h3>
            <h2>{`We use ${countervalue} here`}</h2>
        </>
    )
}
export default App
