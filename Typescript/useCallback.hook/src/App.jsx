import {useCallback, useState} from 'react';
import './App.css';
import List from './components/List';

function App() {
    const [count,setCount]=useState(0);
 

    const [theme,Settheme]=useState(false);
  

 
    const getCount=useCallback((addon)=>
    {
        return [count*addon,count+9,count+10-addon]
    },[count])
    const darkTheme={
        backgroundColor: theme? "red":"white",
        color: theme? "white":"red",
    }

    return (
     
    <div className="App" style={darkTheme}>
          <input type="text" value={count} onChange={(e) => setCount(parseInt(e.target.value))} />
          <button onClick={() => Settheme(prevDrak => !prevDrak)}>Toggle BackgroundColor</button>
          <List getCount={getCount} />
       
      </div>
      
  )
}

export default App
