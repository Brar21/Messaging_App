import { signOut } from "firebase/auth";
import React,{ useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase";


export default function Navbar() {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="navbar">
            <span className="logo">
                Friend Time
            </span>
            <div className="user">
                <img src={currentUser.photoURL} alt= {currentUser.displayName} />
                <span>{currentUser.displayName}</span>
                <button onClick={()=> signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}