import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Firebase';
import React from "react";

import {  signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
    const [err, setErr] = React.useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            
            await signInWithEmailAndPassword(auth, email, password);
navigate("/")
        } catch (err) {
            setErr(true)
        }

    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Friend Time</span>
                <span className="title"> Join the Party</span>

                <form onSubmit={handleSubmit}>
                 
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    
                    <button>Login</button>
                    {err && <span>Something Went Wrong</span>}

                </form>
                <p>You don't  have an account? <Link to="/Register">Register</Link></p>
            </div>
        </div>
    )
}