import { useState } from 'react'
import './App.css'

function App() {
    const [num,setNum]=useState(0)
    const [darkWeb,SetDarkweb]=useState(false)
const Multiply2Number=ReduceSpeed(num)
    const themeChanger={
        backgroundColor: darkWeb? "yellow":"gray",
        color: darkWeb? "gray":"yellow"
    }

  return (
    <div className="App" style={themeChanger}>
          <input type="text" value={num} onChange={() => setNum(parseInt(e => e.target.value))} />
          <button onClick={() => SetDarkweb(dark!=dark)}>Theme Toggler</button>
          <div>{Multiply2Number}</div>
    </div>
  )
}

function ReduceSpeed(number)
{
    console.log("how much slow?")
    for(let i=0;i<=10000000000;i++)
    {
        return num*2
    }
}





export default App
