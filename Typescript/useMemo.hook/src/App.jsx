import { useState } from 'react'
import './App.css'

function App() {
    const [num,setNum]=useState(0)
    const [darkWeb,SetDarkweb]=useState(false)

    const themeChanger={
        backgroundColor: darkWeb? "yellow":"gray",
        color: darkWeb? "gray":"yellow"
    }

  return (
    <div className="App" style={themeChanger}>
          <input type="text" value={num} onChange={() => setNum(parseInt(e => e.target.value))} />
          <button onClick={() => SetDarkweb(dark!=dark)}>Theme Toggler</button>
    </div>
  )
}

export default App
