import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <h1>TypeScout</h1>
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;
