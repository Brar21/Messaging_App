
import './App.css';
import './Style.scss';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { Navigate } from "react-router-dom";

function App() {
  const { currentUser } = useContext(AuthContext);
  const PrivateRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="Login" />
    }
    return children
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<PrivateRoute><Home /></PrivateRoute>}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='Register' element={<Register/>}></Route>
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
