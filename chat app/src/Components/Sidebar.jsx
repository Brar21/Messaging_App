import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
import React from "react";

export default function Sidebar() {
    
    return (
        <div className="sidebar">
            <Navbar />
            <Search />
            <Chats/>
        </div>
    )
}