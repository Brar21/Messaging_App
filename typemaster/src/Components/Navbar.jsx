import { Link } from "react-router-dom";

function Navbar() {
    
    return <>
        <Link to="/">Home</Link>
        <Link to="/testspeed">Test</Link>
        <Link to="/techniques">Learn Techniques</Link>
        <Link to="/login">Login</Link>
        <p>or</p>
        <Link to="/signup">SIGNUP</Link>

    </>
}
export default Navbar;