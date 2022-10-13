import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";
import React from "react";

export default function Home() {
    
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat/>
            </div>
        </div>
    )
}