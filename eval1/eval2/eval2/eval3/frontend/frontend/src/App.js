

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Register from './component/register';
import Allposts from './component/Allposts';
import Createposts from './component/Createposts';

function App() {
  return (
    <div className="App">
      <h1>posts app</h1>
      <Routes>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/allposts" element={<Allposts/>}/>
        <Route path="/create" element={<Createposts/>}/>

      </Routes>
    </div>
  );
}

export default App;
