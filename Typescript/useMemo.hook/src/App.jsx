import {useEffect,useMemo,useState} from 'react';
import './App.css';

function App() {
    const [num,setNum]=useState(1)
    const [darkWeb,SetDarkweb]=useState(false)

    const SlowNumber=useMemo(()=>{return SlowPerformance(num)},[num])//1step

    const themeChanger=useMemo(() =>//3 step
    {
            return{ backgroundColor: darkWeb? "yellow":"gray",
            color: darkWeb? "gray":"yellow"}
    },[darkWeb])
    
    useEffect(() =>//2nd step
    {
        console.log("themechanger render in both cases")
    },[themeChanger])
//console.log("reder code")
  return (
    <div className="App" style={themeChanger}>
          <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} />
          <button onClick={() => SetDarkweb(dark=>!dark)}>Theme Toggler</button>
          <div>{SlowNumber}</div>
    </div>
  )
}

function SlowPerformance(number)
{
    console.log("slowness of web")
    for(let i=0;i<=100000000;i++){}
    return number+5
}

export default App
