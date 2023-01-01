import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
    const [num,setNum]=useState(1)
    const [darkWeb,SetDarkweb]=useState(false)
    const Add2Number=useMemo(() =>{return ReduceSpeed(num)},[num])
    const themeChanger={
        backgroundColor: darkWeb? "yellow":"gray",
        color: darkWeb? "gray":"yellow"
    }

    useEffect(() =>
    {
        console.log("theme rendring in both cases")
    },[darkWeb])

  return (
    <div className="App" style={themeChanger}>
          <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} />
          <button onClick={() => SetDarkweb(dark=>!dark)}>Theme Toggler</button>
          <div>{Add2Number}</div>
    </div>
  )
}

function ReduceSpeed(number)
{
    console.log("how much slow?")
    for(let i=0;i<=10000000;i++)
    {}
        return number+2
    
}





export default App
