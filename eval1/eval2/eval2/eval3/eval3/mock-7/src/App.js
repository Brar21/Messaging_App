import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Allroutes from './Routes/Allroutes';



function App() {

  
  return (
    <div className="App">
    
   <Allroutes/> 
    
    
    </div>
  );
}

export default App;
