import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Getprofile from '../pages/Getprofile'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProfileEdit from '../pages/Profileediting'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Getprofile/>}/>
            <Route path="/editprofile" element={<ProfileEdit/>}/>


        </Routes>
    </div>
  )
}

export default Allroutes