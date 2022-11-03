import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    
    return <div className="nav">
     
        <h1>Type Master</h1>
        <Link to="/"><strong>Typing Learner</strong></Link>
        <Link to="/testspeed"><strong>Test</strong></Link>
        <Link to="/techniques"><strong>Learn Techniques</strong></Link>
        <div className="secondpart">
            <Link to="/login"><strong>Login</strong></Link>
            <b>or</b>
            <Link to="/signup" className="signupButton"><strong>SIGNUP</strong></Link>
        </div>


    </div>
}
export default Navbar;
//No we can't do like simple or Vanila javascript so what we do?